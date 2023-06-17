# ChipWithButton

&nbsp;

## Description

The **ChipWithButton** gives you a pre-styled chip with button component.

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
import { ChipWithButton } from '@savovsky/fel-ui';

...

    // const handleOnClickBtn = () => { ... };

    <ChipWithButton
        // REQUIRED props (with examplary values)
        content="Some text"

        // EXPOSED OPTIONAL props (with default values)
        // margin="0"
        // textTransform="none"
        // maxWidth="200px"
        // handleOnClickBtn={handleOnClickBtn}
        // isDisabled={false}
        // dataTestid="fel-chip-with-button"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-chips-chipwithbutton--default)

&nbsp;
