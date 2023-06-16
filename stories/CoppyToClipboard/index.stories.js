import React from 'react';

import { CopyToClipboard } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/CopyToClipboard/README.md';

export default {
    title: 'UI/CopyToClipboard',
    component: CopyToClipboard,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const DemoWrapper = ({ children }) => (
    <div style={{ margin: '150px' }}>{children}</div>
);

const Template = args => (
    <DemoWrapper>
        <CopyToClipboard {...args} />
    </DemoWrapper>
);

const text = 'Text to be copied';

export const Default = Template.bind({});

Default.args = {
    text,
};

export const CustomTooltipWidth = Template.bind({});

CustomTooltipWidth.args = {
    text,
    tooltipWidth: '100px',
};

export const CustomTooltipPlacement = Template.bind({});

CustomTooltipPlacement.args = {
    text,
    tooltipWidth: '100px',
    toolTipPlacement: 'right',
};

export const CustomTooltipOffset = Template.bind({});

CustomTooltipOffset.args = {
    text,
    tooltipWidth: '100px',
    toolTipPlacement: 'right',
    tooltipOffset: '50px',
};

export const CustomTooltipContent = Template.bind({});

CustomTooltipContent.args = {
    text,
    tooltipWidth: '230px',
    tooltipContent: 'Copy the user address to the clipboard',
};

export const CustomSnackbarSuccessMsg = Template.bind({});

CustomSnackbarSuccessMsg.args = {
    text,
    tooltipWidth: '230px',
    tooltipContent: 'Copy the user address to the clipboard',
    snackbarSuccessContent: 'The address has been copied to the clipboard',
};

export const CustomHideSnackbarDuration = Template.bind({});

CustomHideSnackbarDuration.args = {
    text,
    tooltipWidth: '230px',
    tooltipContent: 'Copy the user address to the clipboard',
    snackbarSuccessContent: 'The address has been copied to the clipboard',
    autoHideSnackbarDuration: 500,
};
