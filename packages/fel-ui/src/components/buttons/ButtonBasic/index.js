// @flow

import * as React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** Handle the onClick event */
    handleOnClick: Function,
    /** What button label (content) to use? */
    content: string | React.Node,
    /** What button style to use? */
    mode?: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
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

const primary = 'primary';
const secondary = 'secondary';
const tertiary = 'tertiary';
const quaternary = 'quaternary';

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonbasic--default)
 */
function ButtonBasic({
    handleOnClick,
    content,
    mode,
    margin,
    textTransform,
    isDisabled,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(handleOnClick, content, mode);
    }, [handleOnClick, content, mode]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__button-basic';

        if (isDisabled) {
            if (mode === secondary) {
                return isMockedData
                    ? `${defaultClass} disabled ${secondary} mockup`
                    : `${defaultClass} disabled ${secondary}`;
            } else if (mode === tertiary) {
                return isMockedData
                    ? `${defaultClass} disabled ${tertiary} mockup`
                    : `${defaultClass} disabled ${tertiary}`;
            } else if (mode === quaternary) {
                return isMockedData
                    ? `${defaultClass} disabled ${quaternary} mockup`
                    : `${defaultClass} disabled ${quaternary}`;
            } else {
                return isMockedData
                    ? `${defaultClass} disabled ${primary} mockup`
                    : `${defaultClass} disabled ${primary}`;
            }
        }

        if (mode === secondary) {
            return isMockedData
                ? `${defaultClass} ${secondary} mockup`
                : `${defaultClass} ${secondary}`;
        } else if (mode === tertiary) {
            return isMockedData
                ? `${defaultClass} ${tertiary} mockup`
                : `${defaultClass} ${tertiary}`;
        } else if (mode === quaternary) {
            return isMockedData
                ? `${defaultClass} ${quaternary} mockup`
                : `${defaultClass} ${quaternary}`;
        } else {
            return isMockedData
                ? `${defaultClass} ${primary} mockup`
                : `${defaultClass} ${primary}`;
        }
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

ButtonBasic.defaultProps = {
    mode: primary,
    margin: '0',
    textTransform: 'uppercase',
    isDisabled: false,
    isMockedData: false,
    dataTestid: 'fel-button-basic',
    moreProps: {},
};

export default ButtonBasic;
