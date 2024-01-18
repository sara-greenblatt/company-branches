import { combineReducers, Reducer } from 'redux';
import { IListState, listReducer } from './list.reducer';

export interface RootState {
    list: IListState;
}

const rootReducer: Reducer<RootState> = combineReducers({
    list: listReducer
});

export default rootReducer;
