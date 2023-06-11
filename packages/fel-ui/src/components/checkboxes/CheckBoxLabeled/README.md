# CheckBoxLabeled

&nbsp;

## Description

The **CheckBoxLabeled** gives you a pre-styled labeled checkbox component.

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
import { CheckBoxLabeled } from '@savovsky/fel-ui';

...

    const handleOnClick = (inputId: string, isChecked: boolean) => { ... };

    <CheckBoxLabeled
        // REQUIRED props (with examplary values)
        label="check me"
        inputId="check-box-labeled"
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // isSelected={false}
        // margin="0"
        // isDisabled={false}
        // iconSize="1x"
        // labelPlacement="right"
        // dataTestid="fel-check-box-labeled"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-checkboxes-checkboxlabeled--default)

&nbsp;
