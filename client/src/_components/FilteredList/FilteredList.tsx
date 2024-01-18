import React from 'react';
// import { ListOptions, MediaItem } from '../index';
import { useSelector } from "react-redux";
// import { Row, Col } from 'react-bootstrap';
import { RootState } from '../../_services/_reducers';
import { Table } from 'react-bootstrap';
import { Store } from '../../_models';

interface FilteredListProps {
    stores: Store[]
}

export const FilteredList: React.FC<FilteredListProps> = ({ stores }) => {

    // selectors
    // const list = useSelector((state: RootState) => state?.list.stores || []);
    const selectedArea: string | undefined = useSelector((state: RootState) => state.list.selectedArea);
    const selectedCity: string | undefined = useSelector((state: RootState) => state.list.selectedCity);
    const search: string | undefined = useSelector((state: RootState) => state?.list?.search) || '';
    ///

    const getStoresByCityArea = (): Store[] => {
        return stores.filter(({ city, store_region }: Store) => (
            (store_region === selectedArea || !selectedArea)
            && (city?.toLowerCase() === selectedCity?.toLowerCase() || !selectedCity)
        ))
    }

    const getFilteredList = (): Store[] => {
        if (search) {
            return stores.filter(({ emp_contact, store_title }) => {
                return store_title?.toLowerCase().includes(search.toLowerCase())
                    || emp_contact?.toLowerCase().includes(search.toLowerCase())
            });
        }
        return getStoresByCityArea();
    };

    const filteredList = getFilteredList();

    return (
        <Table striped bordered hover className='shadow p-3 mb-5 bg-white rounded'>
            <thead>
                <tr>
                    <th className='text-secondary'>Store ID</th>
                    <th className='text-secondary'>Name</th>
                    <th className='text-secondary'>City</th>
                    <th className='text-secondary'>Address</th>
                    <th className='text-secondary'>Area</th>
                </tr>
            </thead>
            <tbody>
                {filteredList?.map((store: Store) => (
                    <tr key={store.store_id}>
                        <td className='text-danger bold'>{store.store_id}.</td>
                        <td>{store.store_title}</td>
                        <td>{store.city}</td>
                        <td>{store.store_address}</td>
                        <td>{store.store_region}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
