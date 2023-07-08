# ItemsPerPage

&nbsp;

## Description

The **ItemsPerPage** gives you a pre-styled pagination - items per page component.

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
import { ItemsPerPage } from '@savovsky/fel-ui';

...

    const handleSelectedOption = (selectId: string, optionId: string) => { ... };

    <ItemsPerPage
        // REQUIRED props (with examplary values)
        handleSelectedOption={handleSelectedOption}
        currentPageSizeId="foo"
        pageSizeOptions={[
            { id: 'foo', value: 'abc' },
            { id: 'bar', value: 'xyz' },
        ]}
        

        // EXPOSED OPTIONAL props (with default values)
        // width="65px"
        // dataTestid="fel-items-per-page"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-pagination-itemsperpage--default)

&nbsp;
