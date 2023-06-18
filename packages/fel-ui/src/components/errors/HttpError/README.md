# HttpError

&nbsp;

## Description

The **HttpError** gives you a pre-styled component for received HTTP error message.

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
import { HttpError } from '@savovsky/fel-ui';

...

    <HttpError
        // REQUIRED props (with examplary values)
        error="Some error message"

        // EXPOSED OPTIONAL props (with default values)
        // maxWidth="initial"
        // margin="0"
        // dataTestid="fel-http-error"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-errors-httperror--default)

&nbsp;
