import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk, logger];


export default createStore(
  rootReducer,
  {},
  compose(applyMiddleware(
    ...middleware),
    window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
