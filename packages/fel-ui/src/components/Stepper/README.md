# Stepper

&nbsp;

## Description

The **Stepper** gives you a pre-styled stepper component.

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
import { Stepper } from '@savovsky/fel-ui';

...

    <Stepper
        // REQUIRED props (with examplary values)
        stepperItems={['Step One', 'Step Two', 'Step Three']}
        completedSteps={2}

        // EXPOSED OPTIONAL props (with default values)
        // stepItemWidth="150px"
        // margin="0"
        // dataTestid="fel-stepper"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-stepper--default)

&nbsp;
