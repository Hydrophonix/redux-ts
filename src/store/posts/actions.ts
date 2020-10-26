import * as types from './types';

export const createPost = (payload: types.Post): types.CreatePostAction => ({
    type: types.CREATE_POST,
    payload,
});
export const createPostSuccess = (payload: types.Post): types.CreatePostSuccessAction => ({
    type: types.CREATE_POST_SUCCESS,
    payload,
});
export const createPostError = (payload: Object): types.CreatePostErrorAction => ({
    type: types.CREATE_POST_ERROR,
    payload,
});

export const fetchPost = (payload: number): types.FetchPostAction => ({
    type: types.FETCH_POST,
    payload,
});
export const fetchPostSuccess = (payload: types.Post): types.FetchPostSuccessAction => ({
    type: types.FETCH_POST_SUCCESS,
    payload,
});
export const fetchPostError = (payload: Object): types.FetchPostErrorAction => ({
    type: types.FETCH_POST_ERROR,
    payload,
});
