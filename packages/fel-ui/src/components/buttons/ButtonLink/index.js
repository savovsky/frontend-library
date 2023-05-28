// @flow

import * as React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** Handle the onClick event */
    handleOnClick: Function,
    /** What button label (content) to use? */
    content: string | React.Node,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
    /** Is the link disabled? */
    isDisabled?: boolean,
    /** Is the link mock? */
    isMockedData?: boolean, // TODO Rename 'isMockedData' to 'isMock'
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonlink--default)
 */
function ButtonLink({
    handleOnClick,
    content,
    margin,
    textTransform,
    isDisabled,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(handleOnClick, content);
    }, [handleOnClick, content]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__button-link';

        if (isDisabled) {
            return isMockedData
                ? `${defaultClass} disabled mockup`
                : `${defaultClass} disabled`;
        }

        return isMockedData ? `${defaultClass} mockup` : defaultClass;
    };

    return (
        <button
            data-testid={dataTestid}
            type="button"
            disabled={isDisabled}
            className={conditionalClassName()}
            onClick={handleOnClick}
            style={{ margin, textTransform }}
            {...moreProps}
        >
            {content}
        </button>
    );
}

ButtonLink.defaultProps = {
    margin: '0',
    textTransform: 'capitalize',
    isDisabled: false,
    isMockedData: false,
    dataTestid: 'fel-button-link',
    moreProps: {},
};

export default ButtonLink;
