# TruncateWrapper

&nbsp;

## Description

The **TruncateWrapper** gives you a pre-styled wrapper component to control the displayed string length.

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
import { TruncateWrapper } from '@savovsky/fel-ui';

...

    <TruncateWrapper
        // REQUIRED props (with examplary values)
        text="some long string"
        limit={10}

        // EXPOSED OPTIONAL props (with default values)
        // tooltipPlacement="top"
        // tooltipWidth="inherit"
        // tooltipOffset="10px"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-truncatewrapper--default)

&nbsp;
