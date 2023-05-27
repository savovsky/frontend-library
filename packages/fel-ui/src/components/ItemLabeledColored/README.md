# ItemLabeledColored

&nbsp;

## Description

The **ItemLabeledColored** gives you a pre-styled component for a labeled item with a color indicator.

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
import { ItemLabeledColored } from '@savovsky/fel-ui';

...

    <ItemLabeledColored
        // REQUIRED props (with examplary values)
        label="amount"
        value="$5.00"

        // EXPOSED OPTIONAL props (with default values)
        // indicatorColor=""
        // indicatorClassName=""
        // indicatorPercentage=""
        // labelColor=""
        // labelClassName=""
        // margin="0"
        // isMockedData={false}
        // dataTestid="fel-item-labeled-colored"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-itemlabeledcolored--default)

&nbsp;
