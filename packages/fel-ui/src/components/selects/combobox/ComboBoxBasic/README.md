# ComboBoxBasic

&nbsp;

## Description

The **ComboBoxBasic** gives you a pre-styled basic combo-box component.

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
import { ComboBoxBasic } from '@savovsky/fel-ui';

...

    const handleComboOnOptionSelect = (inputId: string, optionId: string) => { ... };
    // const handleComboTextInputOnChange = (inputId: string, inputValue: string) => { ... };

    <ComboBoxBasic
        // REQUIRED props (with examplary values)
        handleComboOnOptionSelect={handleComboOnOptionSelect}
        currentOptionId="foo"
        inputId="name-input"
        label="name"
        optionItems={[
            { id: 'foo', value: 'abc' },
            { id: 'bar', value: 'xyz' },
        ]}
        

        // EXPOSED OPTIONAL props (with default values)
        // isDisabled={false}
        // maxWidth="initial"
        // optionsTextTransform="none"
        // optionsContainerMaxHeight="250px"
        // validationErrorInternal="Please, select an option OR clear the input"
        // validationError=""
        // isMultipleSelect={false}
        // dataTestid="fel-combo-box-basic"
        // handleComboTextInputOnChange={handleComboTextInputOnChange}
        // isMockedData={false}
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-selects-combobox-comboboxbasic--default)

&nbsp;
