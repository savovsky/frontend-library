// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {
    isDisabled: boolean,
    handleOnClickPrevious: Function,
};

function PreviousButton({ isDisabled, handleOnClickPrevious }: Props) {
    const conditionalClassName = () => {
        const defaultClass = 'fel__paginator_button';

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    return (
        <li>
            <button
                type="button"
                aria-label="Pagination Previous Button"
                className={conditionalClassName()}
                onClick={handleOnClickPrevious}
                disabled={isDisabled}
                data-testid="fel-paginator-previous-btn"
            >
                <FontAwesomeIcon icon={faChevronLeft} size="1x" />
            </button>
        </li>
    );
}

export default PreviousButton;
