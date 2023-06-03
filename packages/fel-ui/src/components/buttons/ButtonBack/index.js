// @flow

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import ButtonLink from '../ButtonLink';
import utils from './utils';

type Props = {
    /** Handle the onClick event */
    handleOnClick: Function,
    /** What button label to use? */
    label?: string,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
    /** Is the link disabled? */
    isDisabled?: boolean,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonback--default)
 */
function ButtonBack({
    handleOnClick,
    label,
    margin,
    textTransform,
    isDisabled,
    dataTestid,
    moreProps,
}: Props) {
    useEffect(() => {
        utils.propsValidation(handleOnClick);
    }, [handleOnClick]);

    const content = () => {
        return (
            <div>
                <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                <span className="fel__button-back-label" role="navigation">
                    {label}
                </span>
            </div>
        );
    };

    return (
        <ButtonLink
            handleOnClick={handleOnClick}
            content={content()}
            dataTestid={dataTestid}
            isDisabled={isDisabled}
            margin={margin}
            textTransform={textTransform}
            moreProps={moreProps}
        />
    );
}

ButtonBack.defaultProps = {
    label: 'back',
    margin: '0',
    isDisabled: false,
    textTransform: 'uppercase',
    dataTestid: 'fel-button-back',
    moreProps: {
        'aria-label': 'Back navigation button',
    },
};

export default ButtonBack;
