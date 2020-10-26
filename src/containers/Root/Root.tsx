// Core
import React, { FC } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core';

// App
import { App } from '../App';

// Store
import { history } from '../../store';

// Assets
import { theme } from '../../assets/theme';

export const Root: FC = () => {
    return (
        <ConnectedRouter history = { history }>
            <ThemeProvider theme = { theme }>
                <App />
            </ThemeProvider>
        </ConnectedRouter>
    );
};
