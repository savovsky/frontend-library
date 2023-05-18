import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
    actions: { argTypesRgex: "on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        }
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
        values: [
            {
                name: 'slate-medium',
                value: '#ebedf0',
            },
            {
                name: 'fog',
                value: '#58595b',
            },
            {
                name: 'orange',
                value: '#d74012',
            },
        ],
    },
    // layout: 'centered'
};
