# DialogInfo

&nbsp;

## Description

The **DialogInfo** gives you a pre-styled read-only dialog component.

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
import { DialogInfo } from '@savovsky/fel-ui';

...

    const handleOnClickClose = () => { ... };
    const someContent = () => <div>Foo</div>;

    <DialogInfo
        // REQUIRED props (with examplary values)
        headerTitle="dialog title"
        handleOnClickClose={handleOnClickClose}
        content={someContent()}

        // EXPOSED OPTIONAL props (with default values)
        // headerTextTransform="capitalize"
        // footerButtonLabel="OK"
        // dataTestid="fel-dialog-info"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialoginfo--default)

&nbsp;
