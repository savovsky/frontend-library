# Breadcrumbs

&nbsp;

## Description

The **Breadcrumbs** gives you a pre-styled breadcrumbs component.

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
import { Breadcrumbs } from '@savovsky/fel-ui';

...

    <Breadcrumbs
        // REQUIRED props (with examplary values)
        breadcrumbs={
            [
                {
                    content: 'item one'
                    handleOnClick: () => { ... }
                },
                {
                    content: 'item two'
                },
            ],
        }

        // EXPOSED OPTIONAL props (with default values)
        // margin="0"
        // linksTextTransform="capitalize"
        // dataTestid="fel-breadcrumbs"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-breadcrumbs--default)

&nbsp;
