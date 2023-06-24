// @flow

import * as React from 'react';

import './index.scss';

type Props = {
    /** Dialog content */
    children: React.Node,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    containerWidth?: string,
    /** Does the 'Overlay' background-color have transparent light? */
    isLightBackground?: boolean,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-dialogcontainer--default)
 */
function DialogContainer({
    children,
    containerWidth,
    isLightBackground,
    dataTestid,
    moreProps,
}: Props) {
    const conditinalClassName = () => {
        const defaultClass = 'fel__modal-dialog-container';

        return isLightBackground
            ? `${defaultClass} fel__card-dialog-light`
            : `${defaultClass} fel__card-dialog`;
    };

    return (
        <div
            className={conditinalClassName()}
            style={{ width: containerWidth }}
            data-testid={dataTestid}
            {...moreProps}
        >
            {children}
        </div>
    );
}

DialogContainer.defaultProps = {
    containerWidth: '500px',
    isLightBackground: false,
    dataTestid: 'fel-dialog-container',
    moreProps: {},
};

export default DialogContainer;
