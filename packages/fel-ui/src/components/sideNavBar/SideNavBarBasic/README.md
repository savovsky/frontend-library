# SideNavBarBasic

&nbsp;

## Description

The **SideNavBarBasic** gives you a pre-styled 'side nav bar' component.
A good idea to be wrapped into `aside` html tag and to control the width from there.

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
import { SideNavBarBasic } from '@savovsky/fel-ui';

...

    const handleOnLinkSelect = (id: string) => { ... };

    <SideNavBarBasic
        // REQUIRED props (with examplary values)
        handleOnLinkSelect={handleOnLinkSelect}
        navItems={[
            { id: 'foo', label: 'abc' },
            { id: 'bar', label: 'xyz' },
        ]}
        
        // EXPOSED OPTIONAL props (with default values)
        // defaultActiveNavLinkId=""
        // dataTestid="fel-side-nav-bar"
        // moreProps={{}}
    />

...
```

## Component Props

check Storybook: Canvas / **Controls**

check Storybook: [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-sidenavbar-sidenavbarbasic--default)

&nbsp;
