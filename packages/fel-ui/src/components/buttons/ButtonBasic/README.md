# ButtonBasic

&nbsp;

## Description

The **ButtonBasic** gives you a pre-styled basic button component.

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
import { ButtonBasic } from '@savovsky/fel-ui';

...

    const handleOnClick = () => { ... };

    <ButtonBasic
        // REQUIRED props (with examplary values)
        handleOnClick={handleOnClick}
        content="button label"

        // EXPOSED OPTIONAL props (with default values)
        // mode="primary"
        // margin="0"
        // textTransform="uppercase"
        // isDisabled={false}
        // isMockedData={false}
        // dataTestid="fel-button-basic"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonbasic--default)

&nbsp;
