// @flow

import React, { useEffect } from 'react';

import './index.scss';

import commonUtils from '../../../../fel-js-utils/src/commonUtils';
import Tooltip from '../Tooltip';
import utils from './utils';

type Props = {
    /** A string that needs to be truncate */
    text: string,
    /** Ellipsis will be displayed after this string length */
    limit: number,
    /** Where the tooltip is displayed? */
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left',
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    tooltipWidth?: string,
    /** What CSS 'top, right, bottom, left' value to use? *(Provide units, e.g. px)* */
    tooltipOffset?: string,
    /** An object with KVPs that will be spread as props (applied) to the 'parent' node.
     * Use this object for `'area-*'`, `'ref'`, etc.
     * This is the Component "backdoor".
     *
     * Note: If you use this prop for providing inline styling via `'style'`,
     * be aware that all exposed component's properties related to CSS will be overwritten (reset).
     * */
    moreProps?: Object,
};

const { truncateString } = commonUtils;

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-truncatewrapper--default)
 */
function TruncateWrapper({
    text,
    limit,
    tooltipPlacement,
    tooltipWidth,
    tooltipOffset,
    moreProps,
}: Props) {
    useEffect(() => {
        utils.propsValidation(text, limit, tooltipPlacement);
    }, [text, limit, tooltipPlacement]);

    return (
        <Tooltip
            content={text}
            isDisabed={text.length <= limit}
            placement={tooltipPlacement}
            width={tooltipWidth}
            offset={tooltipOffset}
            moreProps={moreProps}
        >
            {truncateString(text, limit)}
        </Tooltip>
    );
}

TruncateWrapper.defaultProps = {
    tooltipPlacement: 'top',
    tooltipWidth: 'inherit',
    tooltipOffset: '10px',
    moreProps: {},
};

export default TruncateWrapper;
