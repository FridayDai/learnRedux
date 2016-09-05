import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import default data
import comments from './data/comments';
import posts from './data/posts';

//import root reducer
import rootReducer from './reducers/index';

//create default state
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;