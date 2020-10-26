// Core
import { combineReducers } from 'redux';

// Reducers
import { postsReducer as posts } from './posts/reducer';

export const rootReducer = combineReducers({
    posts,
});

export type AppState = ReturnType<typeof rootReducer>;
