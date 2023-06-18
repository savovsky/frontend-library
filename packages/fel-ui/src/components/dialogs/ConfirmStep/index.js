// @flow

import * as React from 'react';

import ButtonBasic from '../../buttons/ButtonBasic';
import LoaderLine from '../../loaders/LoaderLine';
import str from '../../../utils/stringsUtils';

type Props = {
    confirmQuestionContent: string | React.Node,
    handleOnClickNo: Function,
    handleOnClickYes: Function,
    isLoading: boolean,
};

function ConfirmStep({
    confirmQuestionContent,
    handleOnClickNo,
    handleOnClickYes,
    isLoading,
}: Props) {
    return (
        <div className="fel__dialog-content">
            <div className="fel__dialog-body">{confirmQuestionContent}</div>
            <div className="fel__dialog-footer">
                <div>{isLoading && <LoaderLine />}</div>
                <div>
                    <ButtonBasic
                        mode="secondary"
                        handleOnClick={handleOnClickNo}
                        content={str.no}
                        dataTestid="fel-dialog-confirm-no-btn"
                        isDisabled={isLoading}
                    />
                    <ButtonBasic
                        handleOnClick={handleOnClickYes}
                        content={str.yes}
                        dataTestid="fel-dialog-confirm-yes-btn"
                        isDisabled={isLoading}
                        margin="0 0 0 15px"
                    />
                </div>
            </div>
        </div>
    );
}

export default ConfirmStep;
