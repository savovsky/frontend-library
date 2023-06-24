# DialogContainer

&nbsp;

## Description

The **DialogContainer** gives you a pre-styled DialogContainer component.

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
import { DialogContainer } from '@savovsky/fel-ui';

...

    <DialogContainer
        // No REQUIRED props. Children must be provided

        // EXPOSED OPTIONAL props (with default values)
        // containerWidth="500px"
        // isLightBackground={false}
        // dataTestid="fel-dialog-container"
        // moreProps={{}}
    >
        <div>Your Component ges here.</div>
    </DialogContainer>

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialogcontainer--default)

&nbsp;
