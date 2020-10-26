// Core
import React from 'react';
import { render } from '@testing-library/react';

// Component
import { App } from '../App';

describe('containers:App', () => {
    test('1. Renders component properly', () => {
        const { getByText } = render(<App />);

        expect(getByText('APP')).toBeInTheDocument();
    });
});
