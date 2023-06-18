# DialogHeader

&nbsp;

## Description

The **DialogHeader** gives you a pre-styled dialog header component.

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
import { DialogHeader } from '@savovsky/fel-ui';

...

    const handleOnClose = () => { ... };

    <DialogHeader
        // REQUIRED props (with examplary values)
        headerTitle="dialog title"
        handleOnClickClose={handleOnClose}

        // EXPOSED OPTIONAL props (with default values)
        // isDisabled={false}
        // textTransform="capitalize"
        // dataTestid="fel-dialog-header"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialogheader--default)

&nbsp;
