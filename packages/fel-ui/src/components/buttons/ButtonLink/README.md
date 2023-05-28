# ButtonLink

&nbsp;

## Description

The **ButtonLink** gives you a pre-styled "link" button component.

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
import { ButtonLink } from '@savovsky/fel-ui';

...

    const handleOnClick = () => { ... };

    <ButtonLink
        // REQUIRED props (with examplary values)
        handleOnClick={handleOnClick}
        content="button label"

        // EXPOSED OPTIONAL props (with default values)
        // margin="0"
        // textTransform="capitalize"
        // isDisabled={false}
        // isMockedData={false}
        // dataTestid="fel-button-link"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonlink--default)

&nbsp;
