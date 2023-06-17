// @flow

import * as React from 'react';

type Props = {
    isOpen: boolean,
    bodyHeight: string,
    bodyContent: React.Node,
};

function ContainerBody({ isOpen, bodyHeight, bodyContent }: Props) {
    const conditionalClassName = () => {
        const defaultClass = 'fel__collapsible-container-main-body';

        return isOpen ? defaultClass : `${defaultClass} hidden`;
    };

    const conditionalHeight = () => {
        return isOpen ? bodyHeight : '0';
    };

    const conditionalContent = () => {
        return isOpen ? bodyContent : null;
    };

    return (
        <div
            className={conditionalClassName()}
            style={{ height: conditionalHeight() }}
            data-testid="fel-collapsible-container-main-body"
        >
            {conditionalContent()}
        </div>
    );
}

export default ContainerBody;
