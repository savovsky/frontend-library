import React from 'react';

import { NoteImportant } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/notes/NoteImportant/README.md';

export default {
    title: 'UI/notes/NoteImportant',
    component: NoteImportant,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const content = 'Lorem ipsum dolor sit amet, gerysud elitckaf nafjew.';

const Template = args => <NoteImportant {...args} />;

export const Default = Template.bind({});

Default.args = {
    content,
};

export const ContentRightAlined = Template.bind({});

ContentRightAlined.args = {
    content,
    aligned: 'right',
};

export const CustomMaxWidth = Template.bind({});

CustomMaxWidth.args = {
    content: 'This is a message with custom max-width',
    maxWidth: '150px',
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    content,
    margin: '50px 0 25px 150px',
};

export const CustomPadding = Template.bind({});

CustomPadding.args = {
    content,
    padding: '10px 0 25px 50px',
};

export const CustomFontSize = Template.bind({});

CustomFontSize.args = {
    content,
    fontSize: '10px',
};
