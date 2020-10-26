// Types
import { Reducer } from 'redux';
import { PostActionTypes, Post } from './types';
import * as types from './types';

type InitialState = {
    posts: Post[];
    loading: boolean;
    error: Object
}

const initialState: InitialState = {
    posts:   [],
    loading: false,
    error:   {},
};

export const postsReducer: Reducer<InitialState, PostActionTypes> =  (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: [ ...state.posts, action.payload ],
            };

        default:
            return state;
    }
};
