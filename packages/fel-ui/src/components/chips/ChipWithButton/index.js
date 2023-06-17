// @flow

import * as React from 'react';

import './index.scss';

import ButtonIcon from '../../buttons/ButtonIcon';

type Props = {
    /** What chip content to use? */
    content: string | React.Node,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
    /** What CSS 'max-width' value to use? *(Provide units, e.g. px)* */
    maxWidth?: string,
    /** Handle the onClick event */
    handleOnClickBtn?: Function,
    /** Is the button disabled? */
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-chips-chipwithbutton--default)
 */
function ChipWithButton({
    content,
    margin,
    textTransform,
    maxWidth,
    handleOnClickBtn,
    isDisabled,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            className="fel__chip-wrapper"
            data-testid={dataTestid}
            role="row"
            style={{ margin, textTransform, maxWidth }}
            {...moreProps}
        >
            <div className="fel__chip-content" role="gridcell">
                {content}
            </div>
            <ButtonIcon
                handleOnClick={handleOnClickBtn}
                icon="times-circle"
                size="sm"
                margin="0 0 0 10px"
                isDisabled={isDisabled}
            />
        </div>
    );
}

ChipWithButton.defaultProps = {
    margin: '0',
    textTransform: 'none',
    maxWidth: '200px',
    handleOnClickBtn: () => {},
    isDisabled: false,
    dataTestid: 'fel-chip-with-button',
    moreProps: {},
};

export default ChipWithButton;
