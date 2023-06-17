// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
    isOpen: boolean,
};

function CollapseArrow({ isOpen }: Props) {
    const conditionalClassName = () => {
        const defaultClass = 'fel__main-container-collapse-arrow';

        return isOpen ? `${defaultClass} up` : `${defaultClass} down`;
    };

    return (
        <div
            data-testid="fel-main-container-collapse-arrow"
            className={conditionalClassName()}
        >
            <FontAwesomeIcon icon={faChevronUp} size="lg" />
        </div>
    );
}

export default CollapseArrow;
