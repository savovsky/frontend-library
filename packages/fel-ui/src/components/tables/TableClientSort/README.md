# TableClientSort

&nbsp;

## Description

The **TableClientSort** gives you a pre-styled client-side sortable table component.

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
import { TableClientSort } from '@savovsky/fel-ui';

...

    // const handleOnColumnSort = (columnId: string, isAscending: boolean) => { ... };

    <TableClientSort
        // REQUIRED props (with examplary values)
        columns={[{
            columnTitle: string | React.Node,
            propKey: string,
            aligned: string,
            isMockedData?: boolean,
            isSortable?: boolean,
            isDateOrNumber?: boolean,
        }]}
        rows={[{
            [key: string]: string | React.Node,
            isAccent?: boolean,
            href?: { [key: string]: string },
            isDateOrNumber?: { [key: string]: string | boolean },
        }]}
        initialSortedColumnId="propKey"
        isInitialSortingAscending={true}
        
        // EXPOSED OPTIONAL props (with default values)
        // tfoot={null | React.Node},
        // width={initial},
        // dataTestid="fel-table-client-sort",
        // handleOnColumnSort={handleOnColumnSort}
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-tables-select-tableclientsort--default)

&nbsp;
