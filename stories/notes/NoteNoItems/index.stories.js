import React from 'react';

import { NoteNoItems } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/notes/NoteNoItems/README.md';

export default {
    title: 'UI/notes/NoteNoItems',
    component: NoteNoItems,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const content = 'Lorem ipsum dolor sit amet, gerysud elitckaf nafjew.';

const Template = args => <NoteNoItems {...args} />;

export const CustomContent = Template.bind({});

CustomContent.args = {
    content,
};

export const ContentAlined = Template.bind({});

ContentAlined.args = {
    textAligned: 'center',
};

export const CustomMaxWidth = Template.bind({});

CustomMaxWidth.args = {
    content: 'This is a message with custom max-width',
    maxWidth: '150px',
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    margin: '50px 0 25px 150px',
};

export const CustomPadding = Template.bind({});

CustomPadding.args = {
    padding: '30px 50px',
};

export const CustomFontSize = Template.bind({});

CustomFontSize.args = {
    fontSize: '10px',
};
