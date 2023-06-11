# SwitchBasic

&nbsp;

## Description

The **SwitchBasic** gives you a pre-styled toggle switch component.

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
import { SwitchBasic } from '@savovsky/fel-ui';

...

    const handleOnClick = (switchId: string, isOn: boolean) => { ... };

    <SwitchBasic
        // REQUIRED props (with examplary values)
        inputId="switch"
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // mode="primary"
        // isOn={false}
        // margin="0"
        // isMockedData={false}
        // dataTestid="fel-switch-basic"
        // isDisabled={false}
        // arialabel="Toggle Switch"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-switches-switchbasic--default)

&nbsp;
