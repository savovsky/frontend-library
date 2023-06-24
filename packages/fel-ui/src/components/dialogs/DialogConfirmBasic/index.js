// @flow

import * as React from 'react';

import './index.scss';

import DialogHeader from '../DialogHeader';
import ConfirmStep from '../ConfirmStep';
import FinalStep from '../FinalStep';

type Props = {
    /** Handle the onClick 'YES' event */
    handleOnClickYes: Function,
    /** Handle the onClick 'NO' event */
    handleOnClickNo: Function,
    /** Handle the onClick 'OK' event */
    handleOnClickOk: Function,
    /** Handle the onClick 'Close' event */
    handleOnClickClose: Function,
    /** What dialog header title to use? */
    headerTitle: string,
    /** What text (content) for confirmation question to use? */
    confirmQuestionContent: string | React.Node,
    /** What text (content) for success message to use? */
    successMessageContent: string | React.Node,
    /** What error message to use? */
    errorMessage: string,
    /** Is requesting submit action? */
    isLoading: boolean,
    /** Is submit action successful? */
    isSuccess: boolean,
    /** Is submit action rejected or an HTTP error? */
    isError: boolean,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialogconfirmbasic--default)
 */
function DialogConfirmBasic({
    handleOnClickYes,
    handleOnClickNo,
    handleOnClickOk,
    handleOnClickClose,
    headerTitle,
    confirmQuestionContent,
    successMessageContent,
    errorMessage,
    isLoading,
    isSuccess,
    isError,
    dataTestid,
    moreProps,
}: Props) {
    const isFinalStep = isSuccess || isError;

    const conditionalContent = () => {
        if (isFinalStep) {
            return (
                <FinalStep
                    isError={isError}
                    successMessageContent={successMessageContent}
                    errorMessageContent={errorMessage}
                    handleOnClickOk={handleOnClickOk}
                />
            );
        }

        return (
            <ConfirmStep
                confirmQuestionContent={confirmQuestionContent}
                handleOnClickNo={handleOnClickNo}
                handleOnClickYes={handleOnClickYes}
                isLoading={isLoading}
            />
        );
    };

    return (
        <div data-testid={dataTestid} {...moreProps}>
            <DialogHeader
                headerTitle={headerTitle}
                handleOnClickClose={handleOnClickClose}
                isDisabled={isLoading}
            />
            {conditionalContent()}
        </div>
    );
}

DialogConfirmBasic.defaultProps = {
    dataTestid: 'fel-dialog-confirm-basic',
    moreProps: {},
};

export default DialogConfirmBasic;
