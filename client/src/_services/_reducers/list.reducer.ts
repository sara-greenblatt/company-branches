import { listConstants } from '../_constants';
import { Store } from '../../_models';

export interface IListState {
    loading: boolean,
    error: boolean,
    stores?: Store[],
    selectedArea?: string,
    selectedCity?: string,
    search?: string
}

const initialState = {
    loading: false,
    error: false,
    stores: [],
    selectedArea: '',
    selectedCity:'',
    search: ''
}

export function listReducer(state: IListState = initialState, action: any): IListState {
    switch (action.type) {
        case listConstants.GET_STORE_BRANCHES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case listConstants.GET_STORE_BRANCHES_SUCCESS:
            return {
                ...state,
                stores: action.payload,
                loading: false,
                error: false
            };
        case listConstants.SET_STORE_AREA:
            return {
                ...state,
                selectedArea: action.payload
            };
        case listConstants.SET_STORE_CITY:
            return {
                ...state,
                selectedCity: action.payload
            };
        case listConstants.SET_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        case listConstants.CLEAR_SEARCH:
            return {
                ...state,
                search: ''
            };
        default:
            return state
    }
};