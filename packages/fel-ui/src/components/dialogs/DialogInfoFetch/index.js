// @flow

import * as React from 'react';

import './index.scss';

import str from '../../../utils/stringsUtils';
import LoaderSpin from '../../loaders/LoaderSpin';
import HttpError from '../../errors/HttpError';
import ButtonBasic from '../../buttons/ButtonBasic';
import DialogHeader from '../DialogHeader';

type Props = {
    /** Handle the onClick 'Retry' event */
    handleOnClickRetry: Function,
    /** Handle the onClick 'Close' event */
    handleOnClickClose: Function,
    /** What dialog header title to use? */
    headerTitle: string,
    /** What dialog body content to use? */
    content: React.Node,
    /** What error message to use? */
    errorMessage: string,
    /** Is fetching data? */
    isLoading: boolean,
    /** Is fetch data successful? */
    isSuccess: boolean,
    /** Is fetch data action rejected or an HTTP error? */
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialoginfofetch--loading-state)
 */
function DialogInfoFetch({
    handleOnClickRetry,
    handleOnClickClose,
    headerTitle,
    content,
    errorMessage,
    isLoading,
    isSuccess,
    isError,
    dataTestid,
    moreProps,
}: Props) {
    const conditionalRenderingBody = () => {
        if (isLoading) {
            return (
                <div className="fel__dialog-spinner-wrapper">
                    <LoaderSpin />
                </div>
            );
        } else if (isError) {
            return <HttpError error={errorMessage} />;
        } else if (isSuccess) {
            return <>{content}</>;
        } else {
            return null;
        }
    };

    const conditionalRenderingButtons = () => {
        if (isError) {
            return (
                <div>
                    <ButtonBasic
                        handleOnClick={handleOnClickRetry}
                        mode="secondary"
                        content={str.retry}
                        margin="0 20px"
                        dataTestid="fel-dialog-retry-basic-btn"
                    />
                    <ButtonBasic
                        handleOnClick={handleOnClickClose}
                        content={str.close}
                        dataTestid="fel-dialog-close-basic-btn"
                    />
                </div>
            );
        } else if (isSuccess) {
            return (
                <ButtonBasic
                    handleOnClick={handleOnClickClose}
                    content={str.close}
                    dataTestid="fel-dialog-close-basic-btn"
                />
            );
        } else {
            return null;
        }
    };

    return (
        <div data-testid={dataTestid} {...moreProps}>
            <DialogHeader
                headerTitle={headerTitle}
                handleOnClickClose={handleOnClickClose}
                isDisabled={isLoading}
            />
            <div className="fel__dialog-content">
                <div className="fel__dialog-body">
                    {conditionalRenderingBody()}
                </div>
                <div className="fel__dialog-footer">
                    <div />
                    {conditionalRenderingButtons()}
                </div>
            </div>
        </div>
    );
}

DialogInfoFetch.defaultProps = {
    dataTestid: 'fel-dialog-info-fetch',
    moreProps: {},
};

export default DialogInfoFetch;
