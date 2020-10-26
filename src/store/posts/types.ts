export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export type Posts = Post[];

// ------------------------------------------------------------------------------------------------
// CREATE
// ------------------------------------------------------------------------------------------------
export const CREATE_POST = 'CREATE_POST';
export type CreatePostAction = {
    type: typeof CREATE_POST;
    payload: Post;
}

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export type CreatePostSuccessAction = {
    type: typeof CREATE_POST_SUCCESS;
    payload: Post;
}

export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';
export type CreatePostErrorAction = {
    type: typeof CREATE_POST_ERROR;
    payload: Object;
}

// ------------------------------------------------------------------------------------------------
// FETCH POST
// ------------------------------------------------------------------------------------------------
export const FETCH_POST = 'FETCH_POST';
export type FetchPostAction = {
    type: typeof FETCH_POST;
    payload: number;
}

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export type FetchPostSuccessAction = {
    type: typeof FETCH_POST_SUCCESS;
    payload: Post;
}

export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export type FetchPostErrorAction = {
    type: typeof FETCH_POST_ERROR;
    payload: Object;
}

// ------------------------------------------------------------------------------------------------
// FETCH POSTS
// ------------------------------------------------------------------------------------------------
export const FETCH_POSTS = 'FETCH_POSTS';
export type FetchPostsAction = {
    type: typeof FETCH_POST;
}

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export type FetchPostsSuccessAction = {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: Post[];
}

export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export type FetchPostsErrorAction = {
    type: typeof FETCH_POSTS_ERROR;
    payload: Object;
}

// ------------------------------------------------------------------------------------------------
// UPDATE
// ------------------------------------------------------------------------------------------------
export const UPDATE_POST = 'UPDATE_POST';
export type UpdatePostAction = {
    type: typeof UPDATE_POST;
    payload: number;
}

export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export type UpdatePostSuccessAction = {
    type: typeof UPDATE_POST_SUCCESS;
    payload: Post;
}

export const UPDATE_POST_ERROR = 'UPDATE_POST_ERROR';
export type UpdatePostErrorAction = {
    type: typeof UPDATE_POST_ERROR;
    payload: Object;
}

// ------------------------------------------------------------------------------------------------
// DELETE
// ------------------------------------------------------------------------------------------------
export const DELETE_POST = 'DELETE_POST';
export type DeletePostAction = {
    type: typeof DELETE_POST;
    payload: number;
}

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export type DeletePostSuccessAction = {
    type: typeof DELETE_POST_SUCCESS;
}

export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';
export type DeletePostErrorAction = {
    type: typeof DELETE_POST_ERROR;
    payload: Object;
}

export type PostActionTypes =
    | CreatePostAction
    | CreatePostSuccessAction
    | CreatePostErrorAction

    | FetchPostAction
    | FetchPostSuccessAction
    | FetchPostErrorAction

    | FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction

    | UpdatePostAction
    | UpdatePostSuccessAction
    | UpdatePostErrorAction

    | DeletePostAction
    | DeletePostSuccessAction
    | DeletePostErrorAction
