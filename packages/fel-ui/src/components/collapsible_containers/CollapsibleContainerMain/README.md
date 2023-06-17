# CollapsibleContainerMain

&nbsp;

## Description

The **CollapsibleContainerMain** gives you a pre-styled collapsible container component.

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
import { CollapsibleContainerMain } from '@savovsky/fel-ui';

...

    // const handleOnClickCollapse = () => { ... };

    <CollapsibleContainerMain
        // REQUIRED props (with examplary values)
        title="container title"
        bodyHeight="200px"
        bodyContent={<BodyContent />}

        // EXPOSED OPTIONAL props (with default values)
        // headerContent={null}
        // margin="0 0 10px"
        // isCollapsed={false}
        // handleOnClickCollapse={handleOnClickCollapse}
        // hasHeaderBorder={false}
        // titleTextTransform="capitalize"
        // dataTestid="fel-collapsible-container-main"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-containers-collapsiblecontainermain--default)

&nbsp;
