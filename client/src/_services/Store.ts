import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from './_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const middleware: ThunkMiddleware<RootState>[] = [thunkMiddleware, loggerMiddleware];

const store: Store<RootState> = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;