# Paginator

&nbsp;

## Description

The **Paginator** gives you a pre-styled paginator component.

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
import { Paginator } from '@savovsky/fel-ui';

...

    const handleOnSelect = (pageIndex: number) => { ... };

    <Paginator
        // REQUIRED props (with examplary values)
        handleOnSelect={handleOnSelect}
        totalPagesCount={35}
        pageIndex={0}

        // EXPOSED OPTIONAL props (with default values)
        // dataTestid="fel-paginator"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-pagination-paginator--default)

&nbsp;
