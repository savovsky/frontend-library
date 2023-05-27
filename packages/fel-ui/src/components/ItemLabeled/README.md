# ItemLabeled

&nbsp;

## Description

The **ItemLabeled** gives you a pre-styled component for a labeled item.

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
import { ItemLabeled } from '@savovsky/fel-ui';

...

    <ItemLabeled
        // REQUIRED props (with examplary values)
        label="name"
        value="John Doe"

        // EXPOSED OPTIONAL props (with default values)
        // isAccent={false}
        // href=""
        // hrefTarget="blank"
        // margin="0"
        // isMockedData={false}
        // dataTestid="fel-item-labeled"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-itemlabeled--default)

&nbsp;
