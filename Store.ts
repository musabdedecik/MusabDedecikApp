import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducers/rootReducer';
import promise from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';

const Store = createStore(rootReducer, applyMiddleware(promise, ReduxThunk));

export type rootStore = ReturnType<typeof rootReducer>;

export default Store;
