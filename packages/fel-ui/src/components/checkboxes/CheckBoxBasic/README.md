# CheckBoxBasic

&nbsp;

## Description

The **CheckBoxBasic** gives you a pre-styled checkbox button.

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
import { CheckBoxBasic } from '@savovsky/fel-ui';

...

    const handleOnClick = (inputId: string, isChecked: boolean) => { ... };

    <CheckBoxBasic
        // REQUIRED props (with examplary values)
        inputId="check-box"
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // isSelected={false}
        // margin="0"
        // isDisabled={false}
        // size="1x"
        // arialabel="Checkbox"
        // dataTestid="fel-check-box-basic"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-checkboxes-checkboxbasic--default)

&nbsp;
