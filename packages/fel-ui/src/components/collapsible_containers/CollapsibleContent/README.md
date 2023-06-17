# ButtonBack

&nbsp;

## Description

The **ButtonBack** gives you a pre-styled "back" button component.

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
import { ButtonBack } from '@savovsky/fel-ui';

...

    const handleOnClick = () => { ... };

    <ButtonBack
        // REQUIRED props (with examplary values)
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // label="back"
        // margin="0"
        // isDisabled={false}
        // textTransform="uppercase"
        // dataTestid="fel-button-back"
        // moreProps={{ 'aria-label': 'Back navigation button' }}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonback--default)

&nbsp;
