import { Dispatch } from 'redux';
import { listConstants } from '../_constants';
import { listLogic } from '../_logic';

export const listActions = {
    getBranchesList,
    searchStore,
    clearSearch,
    setStoreArea,
    setStoreCity
};

function getBranchesList() {
    return (dispatch: Dispatch) => {
        dispatch(request());

        listLogic.fetchStores()
            .then(items => dispatch(success(items)))
            .catch(error => dispatch(failure(error?.toString())));
    };

    function request() { return { type: listConstants.GET_STORE_BRANCHES_REQUEST } }
    function success(payload: any) { return { type: listConstants.GET_STORE_BRANCHES_SUCCESS, payload } }
    function failure(error: any) { return { type: listConstants.GET_STORE_BRANCHES_FAILURE, error } }
}

function searchStore(searchText: string) {
    return (dispatch: Dispatch) => {
        dispatch(success(searchText));
    };

    function success(payload: string) { return { type: listConstants.SET_SEARCH, payload } }
}

function clearSearch() {
    return (dispatch: Dispatch) => {
        dispatch(success());
    };

    function success() { return { type: listConstants.CLEAR_SEARCH } }
}

function setStoreArea(storeArea: string) {
    return (dispatch: Dispatch) => {
        dispatch(success(storeArea));
    };

    function success(payload: string) { return { type: listConstants.SET_STORE_AREA, payload } }
}

function setStoreCity(storeCity: string) {
    return (dispatch: Dispatch) => {
        dispatch(success(storeCity));
    };

    function success(payload: string) { return { type: listConstants.SET_STORE_CITY, payload } }
}
