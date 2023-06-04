# Tooltip

&nbsp;

## Description

The **Tooltip** gives you a pre-styled tooltip component.

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
import { Tooltip } from '@savovsky/fel-ui';

...

    <Tooltip
        // REQUIRED props (with examplary values)
        content="Tooltip content"

        // EXPOSED OPTIONAL props (with default values)
        // placement="bottom"
        // isLight={false}
        // isDisabled={false}
        // width="150px"
        // offset="10px"
        // dataTestid="fel-tooltip"
        // moreProps={{}}
    >
        <div>Hover over me</div>
    </Tooltip>

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-tooltip--default)

&nbsp;
