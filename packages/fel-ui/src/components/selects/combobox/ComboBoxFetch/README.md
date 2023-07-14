# ComboBoxFetch

&nbsp;

## Description

The **ComboBoxFetch** gives you a pre-styled handling an API call combo-box component.

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
import { ComboBoxFetch } from '@savovsky/fel-ui';

...

    const handleComboOnOptionSelect = (inputId: string, optionId: string) => { ... };
    const handleComboTextInputOnChange = (inputId: string) => { ... };
    const fetchData = () => {
        dispatch(fetchSomeData());
    };

    <ComboBoxFetch
        // REQUIRED props (with examplary values)
        handleComboOnOptionSelect={handleComboOnOptionSelect}
        handleComboTextInputOnChange={handleComboTextInputOnChange}
        fetchData={fetchData}
        inputId="name-input"
        label="name"
        optionItems={[
            { id: 'foo', value: 'abc' },
            { id: 'bar', value: 'xyz' },
        ]}
        

        // EXPOSED OPTIONAL props (with default values)
        // isDisabled={false}
        // currentOptionId=""
        // maxWidth="initial"
        // optionsTextTransform="none"
        // optionsContainerMaxHeight="250px"
        // validationErrorInternal="Please, select an option OR clear the input"
        // validationError=""
        // isMultipleSelect={false}
        // dataTestid="fel-combo-box-fetch"
        // isMockedData={false}
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-selects-combobox-comboboxfetch--default)

&nbsp;
