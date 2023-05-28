# ButtonIcon

&nbsp;

## Description

The **ButtonIcon** gives you a pre-styled button component with font-awesome icon.

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
import { ButtonIcon } from '@savovsky/fel-ui';

...

    const handleOnClick = () => { ... };

    <ButtonIcon
        // REQUIRED props (with examplary values)
        handleOnClick={handleOnClick}
        content="button label"

        // EXPOSED OPTIONAL props (with default values)
        // label=""
        // arialabel="Icon Button"
        // size="lg"
        // labelPlacement="right"
        // margin="0"
        // textTransform="capitalize"
        // isDisabled={false}
        // isMockedData={false}
        // dataTestid="fel-button-icon"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-ButtonIcon--default)

&nbsp;
