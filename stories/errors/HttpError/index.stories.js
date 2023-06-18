import React from 'react';

import { HttpError } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/errors/HttpError/README.md';

export default {
    title: 'UI/errors/HttpError',
    component: HttpError,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const Template = args => <HttpError {...args} />;

const error = 'This is an HTTP error message';

export const Default = Template.bind({});

Default.args = {
    error,
};

export const CustomMaxWidth = Template.bind({});

CustomMaxWidth.args = {
    error,
    maxWidth: '120px',
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    error,
    margin: '50px 0 25px 150px',
};
