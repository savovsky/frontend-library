// @flow

import React from 'react';

import './index.scss';

import TitleContainer from '../../title/TitleContainer';
import ButtonIcon from '../../buttons/ButtonIcon';

type Props = {
    /** What dialog header title to use? */
    headerTitle: string,
    /** Handle the onClick 'Close' event */
    handleOnClickClose: Function,
    /** Is the 'Close' button disabled? */
    isDisabled?: boolean,
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialogheader--default)
 */
function DialogHeader({
    headerTitle,
    handleOnClickClose,
    isDisabled,
    textTransform,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            data-testid={dataTestid}
            className="fel__dialog-header"
            {...moreProps}
        >
            <TitleContainer
                content={headerTitle}
                padding="0"
                textTransform={textTransform}
            />
            <ButtonIcon
                handleOnClick={handleOnClickClose}
                icon="times"
                arialabel="Close Dialog Modal"
                isDisabled={isDisabled}
                dataTestid="fel-dialog-close-icon-btn"
            />
        </div>
    );
}

DialogHeader.defaultProps = {
    isDisabled: false,
    textTransform: 'capitalize',
    dataTestid: 'fel-dialog-header',
    moreProps: {},
};

export default DialogHeader;
