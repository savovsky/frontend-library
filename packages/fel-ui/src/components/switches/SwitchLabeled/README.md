# SwitchLabeled

&nbsp;

## Description

The **SwitchLabeled** gives you a pre-styled labeled toggle switch component.

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
import { SwitchLabeled } from '@savovsky/fel-ui';

...

    const handleOnClick = (switchId: string, isOn: boolean) => { ... };

    <SwitchLabeled
        // REQUIRED props (with examplary values)
        label="Click me"
        inputId="switch-labeled"
        handleOnClick={handleOnClick}

        // EXPOSED OPTIONAL props (with default values)
        // mode="primary"
        // isOn={false}
        // margin="0"
        // isMockedData={false}
        // dataTestid="fel-switch-labeled"
        // isDisabled={false}
        // labelPlacement="right"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-switches-switchlabeled--default)

&nbsp;
