# Modal

&nbsp;

## Description

The **Modal** gives you a pre-styled modal component.

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
import { Modal } from '@savovsky/fel-ui';

...

    const handleOnClose = () => { ... };

    <Modal
        // REQUIRED props (with examplary values)
        handleOnModalClose={handleOnClose}

        // EXPOSED OPTIONAL props (with default values)
        // isOpen={false}
        // bodyPaddingRight={0}
        // isClosingOnClickOutside={false}
        // isClosingOnHitEscape={false}
        // contentWidth="initial"
        // isLight={false}
        // dataTestid="fel-modal"
        // moreProps={{}}
    >
        <div>Your Component goes here.</div>
    </Modal>

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-modal--default)

&nbsp;
