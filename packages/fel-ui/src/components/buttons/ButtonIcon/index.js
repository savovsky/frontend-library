// @flow

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faTrashAlt,
    faTimes,
    faCopy,
    faClone,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import utils from './utils';

type Props = {
    /** Handle the onClick event */
    handleOnClick: Function,
    /** What icon to use? */
    icon: 'edit' | 'trash' | 'times' | 'copy' | 'clone',
    /** What button label to use? */
    label?: string,
    /** What 'aria-label' label to use? */
    arialabel?: string,
    /** What icon size to use? */
    size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x',
    /** Where is the label placement? */
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left',
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
    /** Is the button disabled? */
    isDisabled?: boolean,
    /** Is the link mock? */
    isMockedData?: boolean, // TODO Rename 'isMockedData' to 'isMock'
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-buttons-buttonicon--default)
 */
function ButtonIcon({
    handleOnClick,
    icon,
    label,
    arialabel,
    size,
    labelPlacement,
    margin,
    textTransform,
    isDisabled,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    useEffect(() => {
        utils.propsValidation(handleOnClick, icon, size, labelPlacement);
    }, [handleOnClick, icon, size, labelPlacement]);

    const conditionalClassName = () => {
        const defaultClass = `fel__button-icon ${String(labelPlacement)}`;

        if (isDisabled) {
            return isMockedData
                ? `${defaultClass} disabled mockup`
                : `${defaultClass} disabled`;
        }

        return isMockedData ? `${defaultClass} mockup` : defaultClass;
    };

    const iconMap = () => {
        const icons = {
            edit: faEdit,
            trash: faTrashAlt,
            times: faTimes,
            copy: faCopy,
            clone: faClone,
            'times-circle': faTimesCircle,
        };

        return icons[icon];
    };

    return (
        <button
            aria-label={arialabel}
            data-testid={dataTestid}
            type="button"
            disabled={isDisabled}
            className={conditionalClassName()}
            onClick={handleOnClick}
            style={{ margin, textTransform }}
            {...moreProps}
        >
            <FontAwesomeIcon icon={iconMap()} size={size} />
            {label && <span className="fel__button-icon_label">{label}</span>}
        </button>
    );
}

ButtonIcon.defaultProps = {
    label: '',
    arialabel: 'Icon Button',
    size: 'lg',
    labelPlacement: 'right',
    margin: '0',
    textTransform: 'capitalize',
    isDisabled: false,
    isMockedData: false,
    dataTestid: 'fel-button-icon',
    moreProps: {},
};

export default ButtonIcon;
