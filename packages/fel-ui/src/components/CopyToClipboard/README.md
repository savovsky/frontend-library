# CopyToClipboard

&nbsp;

## Description

The **CopyToClipboard** gives you a pre-styled component for coping text into the clipboard.

&nbsp;

## Library Installation

- **yarn**

    `yarn add @savovsky/fel-ui`

- **npm**

    `npm insatll @savovsky/fel-ui`

Add into your **'main' index.j**:

```javascript
import '@savovsky/fel-ui/build/styles.css';
```

&nbsp;

## Component Usage

Add into your React component:

```javascript
import { CopyToClipboard } from '@savovsky/fel-ui';

...

    <CopyToClipboard
        // REQUIRED props (with examplary values)
        text="Text to be copied"

        // EXPOSED OPTIONAL props (with default values)
        // icon="copy"
        // isDisabled={false}
        // autoHideSnackbarDuration={2500}
        // margin="0"
        // toolTipPlacement="top"
        // tooltipOffset="10px"
        // tooltipWidth="auto"
        // tooltipContent="Copy to clipboard"
        // snackbarSuccessContent="Copied to clipboard"
        // dataTestid="fel-copy-to-clipboard"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-copytoclipboard--default)

&nbsp;
