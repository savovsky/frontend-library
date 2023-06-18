// @flow

import * as React from 'react';

import ButtonBasic from '../../buttons/ButtonBasic';
import HttpError from '../../errors/HttpError';
import str from '../../../utils/stringsUtils';

type Props = {
    isError: boolean,
    successMessageContent: string | React.Node,
    errorMessageContent: string,
    handleOnClickOk: Function,
};

function FinalStep({
    isError,
    successMessageContent,
    errorMessageContent,
    handleOnClickOk,
}: Props) {
    const conditionalContent = () => {
        if (isError) {
            return <HttpError error={errorMessageContent} />;
        }

        return (
            <div className="fel__dialog-confirm-success">
                {successMessageContent}
            </div>
        );
    };

    return (
        <div className="fel__dialog-content">
            <div className="fel__dialog-body">{conditionalContent()}</div>
            <div className="fel__dialog-footer">
                <div />
                <ButtonBasic
                    handleOnClick={handleOnClickOk}
                    content={str.ok}
                    dataTestid="fel-dialog-confirm-ok-btn"
                />
            </div>
        </div>
    );
}

export default FinalStep;
