import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthReducer } from './reducers/AuthReducer';
import { AdminReducer } from './reducers/AdminReducer';
import { MasterReducer } from './reducers/MasterReducer';

const rootReducers = combineReducers({
    AuthReducer,
    AdminReducer,
    MasterReducer
});

const middlewares = [thunkMiddleware]
const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));
export default Store;
