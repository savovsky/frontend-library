// @flow

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
// https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
// https://mathiasbynens.github.io/rel-noopener/

import * as React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** What is the URL of the page the link goes to? */
    href: string,
    /** What text (content) to use as a link? */
    children: string | React.Node,
    /** Where to open the linked document? */
    target?: 'self' | 'blank' | 'parent' | 'top',
    /** Is the link disabled? */
    isDisabled?: boolean,
    /** Is the link mock? */
    isMockedData?: boolean, // TODO Rename 'isMockedData' to 'isMockData'
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** An object with KVPs that will be spread as props (applied) to the 'parent' node.
     * Use this object for `'area-*'`, `'ref'`, etc.
     * This is the Component "backdoor".
     *
     * Note: If you use this prop for providing inline styling via `'style'`,
     * be aware that all exposed component's properties related to CSS will be overwritten (reset).
     * */
    moreProps?: Object,
};

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-itemlink--default)
 */
function ItemLink({
    href,
    children,
    target,
    isDisabled,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(href, children, target);
    }, [href, children, target]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__item-link';

        if (isDisabled) {
            return `${defaultClass} disabled`;
        } else if (isMockedData) {
            return `${defaultClass} mockup`;
        } else {
            return defaultClass;
        }
    };

    return (
        <a
            data-testid={dataTestid}
            href={href}
            target={`_${String(target)}`}
            rel="noopener noreferrer"
            className={conditionalClassName()}
            {...moreProps}
        >
            {children}
        </a>
    );
}

ItemLink.defaultProps = {
    target: 'blank',
    isDisabled: false,
    isMockedData: false,
    dataTestid: 'fel-item-link',
    moreProps: {},
};

export default ItemLink;
