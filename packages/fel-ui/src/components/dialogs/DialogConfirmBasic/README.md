# DialogConfirmBasic

&nbsp;

## Description

The **DialogConfirmBasic** gives you a pre-styled basic dialog confirmtion component.

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
import { DialogConfirmBasic } from '@savovsky/fel-ui';

...

    const handleOnClickYes = () => { ... };
    const handleOnClickNo = () => { ... };
    const handleOnClickOk = () => { ... };
    const handleOnClickClose = () => { ... };

    <DialogConfirmBasic
        // REQUIRED props (with examplary values)
        handleOnClickYes={handleOnClickYes}
        handleOnClickNo={handleOnClickNo}
        handleOnClickOk={handleOnClickOk}
        handleOnClickClose={handleOnClickClose}
        headerTitle="dialog title"
        confirmQuestionContent="Are you sure?"
        successMessageContent=""
        errorMessage=""
        isLoading={false}
        isSuccess={false}
        isError={false}

        // EXPOSED OPTIONAL props (with default values)
        // dataTestid="fel-dialog-confirm-basic"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialogconfirmbasic--default)

&nbsp;
