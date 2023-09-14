# TableBasic

&nbsp;

## Description

The **TableBasic** gives you a pre-styled basic table component.

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
import { TableBasic } from '@savovsky/fel-ui';

...

    <TableBasic
        // REQUIRED props (with examplary values)
        columns={[{
            columnTitle: string | React.Node,
            propKey: string,
            aligned: string,
            isMockedData?: boolean,
        }]}
        rows={[{
            [key: string]: string | React.Node,
            isAccent?: boolean,
            href?: { [key: string]: string },
        }]}
        
        // EXPOSED OPTIONAL props (with default values)
        // tfoot={null | React.Node},
        // width={initial},
        // dataTestid="fel-table-basic",
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-tables-select-tablebasic--default)

&nbsp;
