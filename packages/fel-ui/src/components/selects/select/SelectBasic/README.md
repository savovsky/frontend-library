# SelectBasic

&nbsp;

## Description

The **SelectBasic** gives you a pre-styled basic select component.

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
import { SelectBasic } from '@savovsky/fel-ui';

...

    const handleSelectedOption = (selectId: string, optionId: string) => { ... };

    <SelectBasic
        // REQUIRED props (with examplary values)
        handleSelectedOption={handleSelectedOption}
        selectId="status"
        label="status"
        currentOptionId="foo"
        optionItems={[
            { id: 'foo', value: 'abc' },
            { id: 'bar', value: 'xyz' },
        ]}
        

        // EXPOSED OPTIONAL props (with default values)
        // isDisabled={false}
        // dataTestid="fel-select-basic"
        // width="initial"
        // optionsContainerMaxHeight="initial"
        // optionsTextTransform="none"
        // isMockedData={false}
        // placeholder=""
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-selects-select-selectbasic--default)

&nbsp;
