// @flow

import * as React from 'react';

import './index.scss';

import str from '../../../utils/stringsUtils';
import ButtonBasic from '../../buttons/ButtonBasic';
import DialogHeader from '../DialogHeader';

type Props = {
    /** What dialog header title to use? */
    headerTitle: string,
    /** What dialog body content to use? */
    content: React.Node,
    /** Handle the onClick 'Close' event */
    handleOnClickClose: Function,
    /** What CSS 'text-transform' value to use for the header? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    headerTextTransform?: string,
    /** What label to use for the footer button */
    footerButtonLabel?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialoginfo--default)
 */
function DialogInfo({
    headerTitle,
    content,
    handleOnClickClose,
    headerTextTransform,
    footerButtonLabel,
    dataTestid,
    moreProps,
}: Props) {
    const buttonLabel = footerButtonLabel || str.ok;

    return (
        <div data-testid={dataTestid} {...moreProps}>
            <DialogHeader
                headerTitle={headerTitle}
                handleOnClickClose={handleOnClickClose}
                textTransform={headerTextTransform}
            />
            <div className="fel__dialog-content">
                <div className="fel__dialog-body">
                    <div className="fel__dialog-info-msg">{content}</div>
                </div>
                <div className="fel__dialog-footer">
                    <div />
                    <ButtonBasic
                        handleOnClick={handleOnClickClose}
                        content={buttonLabel}
                        dataTestid="fel-dialog-info-ok-btn"
                    />
                </div>
            </div>
        </div>
    );
}

DialogInfo.defaultProps = {
    headerTextTransform: 'capitalize',
    footerButtonLabel: str.ok,
    dataTestid: 'fel-dialog-info',
    moreProps: {},
};

export default DialogInfo;
