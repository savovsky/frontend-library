# RadioButtonLabeled

&nbsp;

## Description

The **RadioButtonLabeled** gives you a pre-styled labeled radio button component.

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
import { RadioButtonLabeled } from '@savovsky/fel-ui';

...

    const handleOnClick = (inputId: string) => { ... };

    <RadioButtonLabeled
        // REQUIRED props (with examplary values)
        isSelected={false}
        content="Choose me"
        inputId="radio-button-one"
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // margin="0"
        // isDisabled={false}
        // iconSize="1x"
        // labelPlacement="right"
        // dataTestid="fel-radio-button-labeled"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-radiobuttons-radiobuttonlabeled--active)

&nbsp;
