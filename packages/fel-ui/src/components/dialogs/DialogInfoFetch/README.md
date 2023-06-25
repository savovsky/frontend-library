# DialogInfoFetch

&nbsp;

## Description

The **DialogInfoFetch** gives you a pre-styled read-only dialog component, that presents fetched data.

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
import { DialogInfoFetch } from '@savovsky/fel-ui';

...

    const handleOnClickRetry = () => { ... };
    const handleOnClickClose = () => { ... };
    const someContent = () => <div>Foo</div>;

    <DialogInfoFetch
        // REQUIRED props (with examplary values)
        handleOnClickRetry={handleOnClickRetry}
        handleOnClickClose={handleOnClickClose}
        headerTitle="dialog title"
        content={someContent()}
        errorMessage=""
        isLoading={false}
        isSuccess={true}
        isError={false}

        // EXPOSED OPTIONAL props (with default values)
        // dataTestid="fel-dialog-info-fetch"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialoginfofetch--loading-state)

&nbsp;
