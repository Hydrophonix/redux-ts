// Core
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

import { rootReducer } from './rootReducer';

export const history = createBrowserHistory();
export const store = configureStore({
    reducer: rootReducer,
});
