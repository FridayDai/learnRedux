/**
 * Created by xplusz on 9/4/16.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReudcer = combineReducers({
    posts,
    comments,
    routing: routerReducer
});

export default rootReudcer;