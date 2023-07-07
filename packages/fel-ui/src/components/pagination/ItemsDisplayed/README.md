# ItemsDisplayed

&nbsp;

## Description

The **ItemsDisplayed** gives you a pre-styled pagination - items displayed component.

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
import { ItemsDisplayed } from '@savovsky/fel-ui';

...

    <ItemsDisplayed
        // REQUIRED props (with examplary values)
        fromItem={10}
        toItem={30}
        totalItems={155}

        // EXPOSED OPTIONAL props (with default values)
        // dataTestid="fel-items-displayed"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-pagination-itemsdisplayed--default)

&nbsp;
