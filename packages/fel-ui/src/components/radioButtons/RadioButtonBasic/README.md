# RadioButtonBasic

&nbsp;

## Description

The **RadioButtonBasic** gives you a pre-styled radio button component.

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
import { RadioButtonBasic } from '@savovsky/fel-ui';

...

    const handleOnClick = (inputId: string) => { ... };

    <RadioButtonBasic
        // REQUIRED props (with examplary values)
        isSelected={false}
        inputId="radio-button-one"
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // margin="0"
        // isDisabled={false}
        // size="1x"
        // arialabel="Radio button"
        // dataTestid="fel-radio-button-basic"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-radiobuttons-radiobuttonbasic--default)

&nbsp;
