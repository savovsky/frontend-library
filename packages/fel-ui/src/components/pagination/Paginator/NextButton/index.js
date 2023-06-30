// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
    isDisabled: boolean,
    handleOnClickNext: Function,
};

function NextButton({ isDisabled, handleOnClickNext }: Props) {
    const conditionalClassName = () => {
        const defaultClass = 'fel__paginator_button';

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    return (
        <li>
            <button
                type="button"
                aria-label="Pagination Next Button"
                className={conditionalClassName()}
                onClick={handleOnClickNext}
                disabled={isDisabled}
                data-testid="fel-paginator-next-btn"
            >
                <FontAwesomeIcon icon={faChevronRight} size="1x" />
            </button>
        </li>
    );
}

export default NextButton;
