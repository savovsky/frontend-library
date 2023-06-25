# NoteNoItem

&nbsp;

## Description

The **NoteNoItem** gives you a pre-styled component for note - 'no items' message.

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
import { NoteNoItem } from '@savovsky/fel-ui';

...

    <NoteNoItem
        // REQUIRED props (with examplary values)
        content="Some important message"

        // EXPOSED OPTIONAL props (with default values)
        // content="There are no items."
        // maxWidth="initial"
        // margin="0"
        // padding="2px 10px"
        // aligned="left"
        // fontSize="12px"
        // dataTestid="fel-note-no-items"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-notes-notenoitems--default)

&nbsp;
