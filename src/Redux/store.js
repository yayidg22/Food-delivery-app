import {createStore} from 'redux';
import UserReducer from './reducers/UserReducer';

const Store  = createStore(UserReducer);

export default Store;