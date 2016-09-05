/**
 * Created by xplusz on 9/4/16.
 */
// a reducer take in two things:
// 1. the action (info about what happened)
// 2. copy of current state

// action, store     let me see    store

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKE':
            var i = action.index;
            var newState = [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1)
            ];
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default posts;