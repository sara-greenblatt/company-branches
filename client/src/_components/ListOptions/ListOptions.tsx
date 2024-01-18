import React, { ChangeEvent } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../../_services/_actions';
import { RootState } from '../../_services/_reducers';
import { Store } from '../../_models'

interface ListOptionsProps {
    stores: Store[];
}

export const ListOptions: React.FC<ListOptionsProps> = ({ stores }: ListOptionsProps) => {
    const dispatch = useDispatch();
    /* Selectors */
    const selectedArea: string | undefined = useSelector((state: RootState) => state.list.selectedArea);
    const selectedCity: string | undefined = useSelector((state: RootState) => state.list.selectedCity);
    const error: boolean = useSelector((state: RootState) => state.list.error);
    const search: string | undefined = useSelector((state: RootState) => state?.list?.search) || '';
    /* ** */

    const filterStoresByArea = () => (
        !selectedArea ? stores : stores.filter(store => store.store_region === selectedArea)
    );

    const storesAreas: string[] = Array.from(new Set(stores?.map(store => store.store_region))) || [];
    const storesCities: string[] = Array.from(new Set(
        filterStoresByArea().map(store => store.city) || [])
    );

    const handleAreaSelected = (eventKey?: any) => {
        dispatch(listActions.setStoreCity(''));
        dispatch(listActions.setStoreArea(eventKey as string));
    };

    const handleCitySelected = (eventKey?: any) => {
        dispatch(listActions.setStoreCity(eventKey as string));
    };

    const setSearch = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(listActions.setStoreCity(''));
        dispatch(listActions.setStoreArea(''));
        dispatch(listActions.searchStore(ev.target.value));
    };

    const handleClear = () => {
        dispatch(listActions.clearSearch());
    };

    return (
        stores.length && !error
            ? (<div className="row list-options">
                <DropdownButton
                    id="dropdown-area"
                    title={`Area Code: ${selectedArea || 'Select'}`}
                    onSelect={handleAreaSelected}
                    className='col-3'
                    variant='secondary'
                >
                    {storesAreas.map((area) => (
                        <Dropdown.Item href="#" key={area} eventKey={area}>{area || ''}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton
                    id="dropdown-city"
                    title={`City: ${selectedCity || 'Select'}`}
                    onSelect={handleCitySelected}
                    className='col-3'
                    variant='outline-secondary'
                >
                    {storesCities.map((city) => (
                        <Dropdown.Item href="#" key={city} eventKey={city}>{city || ''}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <input
                    className="col-4 form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={setSearch}
                    value={search}
                />
                <Button variant="outline-danger" onClick={handleClear}>Clear Search</Button>
            </div>
            ) : <h5>No Stores. Probably stores data could not be fetched due to network issue</h5>
    );
};
