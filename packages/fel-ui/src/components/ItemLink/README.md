# ItemLink

&nbsp;

## Description

The **ItemLink** gives you a pre-styled component for a link item.

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
import { ItemLink } from '@savovsky/fel-ui';

...

    <ItemLink
        // REQUIRED props (with examplary values)
        href="https://google.com"

        // EXPOSED OPTIONAL props (with default values)
        // traget="blank"
        // isDisabled={false}
        // isMockedData={false}
        // dataTestid="fel-item-link"
        // moreProps={{}}
    >
        Follow me
    </ItemLink>

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-itemlink--default)

&nbsp;
