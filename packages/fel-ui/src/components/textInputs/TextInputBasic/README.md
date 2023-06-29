# TextInputBasic

&nbsp;

## Description

The **TextInputBasic** gives you a pre-styled basic text input component.

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
import { TextInputBasic } from '@savovsky/fel-ui';

...

    const handleTextInputOnBlur = (inputId: string) => { ... };
    const handleTextInputOnChange = (inputId: string, inputValue: string) => { ... };

    <TextInputBasic
        // REQUIRED props (with examplary values)
        label="phone number"
        inputId="phone-number"
        value=""

        // EXPOSED OPTIONAL props (with default values)
        // validationError=""
        // isDisabled={false}
        // hasAutoFocus={false}
        // width="initial"
        // maxLength={26}
        // placeholder=""
        // dataTestid="fel-text-input-basic"
        // handleTextInputOnBlur={handleTextInputOnBlur}
        // handleTextInputOnChange={handleTextInputOnChange}
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-textinputs-textinputbasic--default)

&nbsp;
