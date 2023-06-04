// @flow

import * as React from 'react';

import './index.scss';

import str from '../../utils/stringsUtils';
import utils from './utils';

type Props = {
    /** What tooltip title (content) to use? */
    content: string | React.Node,
    /** The node that will be wrapped with this component */
    children: string | React.Node,
    /** Where the tooltip is displayed? */
    placement?: 'top' | 'right' | 'bottom' | 'left',
    /** Is the tooltip in 'light' mode? *(Light background with dark text)* */
    isLight?: boolean,
    /** Is the tooltip disabled? */
    isDisabled?: boolean,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    width?: string,
    /** What CSS 'top, right, bottom, left' value to use? *(Provide units, e.g. px)* */
    offset?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-tooltip--default)
 */
function Tooltip({
    content,
    children,
    placement,
    isLight,
    isDisabled,
    width,
    offset,
    dataTestid,
    moreProps,
}: Props) {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        utils.propsValidation(content, children, placement);
    }, [content, children, placement]);

    const handleOnMouseEnter = (e: SyntheticMouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!isDisabled) {
            setIsVisible(true);
        }
    };

    const handleOnMouseLeave = (e: SyntheticMouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!isDisabled) {
            setIsVisible(false);
        }
    };

    const handleOnKeyPress = (e: SyntheticKeyboardEvent<>) => {
        if (e.key === 'Enter') {
            setIsVisible(false);
        }
    };

    const handleOnClick = () => {
        setIsVisible(false);
    };

    const handleOnFocus = () => {
        setIsVisible(true);
    };

    const handleOnBlur = () => {
        setIsVisible(false);
    };

    const conditionalClassName = () => {
        const defaultClass = `fel__tooltip-body fel__${String(placement)}`;

        return isLight ? `${defaultClass} fel__light-tooltip` : defaultClass;
    };

    const { top, right, bottom, left } = str;

    const conditionalStyle = () => {
        if (offset) {
            switch (placement) {
                case top: {
                    return { width, bottom: `calc(100% + ${offset})` };
                }

                case right: {
                    return { width, left: `calc(100% + ${offset})` };
                }

                case bottom: {
                    return { width, top: `calc(100% + ${offset})` };
                }

                case left: {
                    return { width, right: `calc(100% + ${offset})` };
                }

                /* istanbul ignore next */
                default:
                    return { width };
            }
        }

        return { width };
    };

    return (
        <div
            className="fel__tooltip-container"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onKeyPress={handleOnKeyPress}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {children}
            {isVisible && !isDisabled && (
                <div
                    className={conditionalClassName()}
                    style={conditionalStyle()}
                    data-testid={dataTestid}
                    aria-label="tooltip"
                    role="tooltip"
                    {...moreProps}
                >
                    {content}
                </div>
            )}
        </div>
    );
}

Tooltip.defaultProps = {
    placement: 'bottom',
    isLight: false,
    isDisabled: false,
    width: '150px',
    offset: '10px',
    dataTestid: 'fel-tooltip',
    moreProps: {},
};

export default Tooltip;
