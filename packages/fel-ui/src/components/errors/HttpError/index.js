// @flow

import React from 'react';

import './index.scss';

type Props = {
    /** What error message to use? */
    error: string,
    /** What CSS 'max-width' value to use? *(Provide units, e.g. px)* */
    maxWidth?: string,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-errors-httperror--default)
 */
function HttpError({ error, maxWidth, margin, dataTestid, moreProps }: Props) {
    return (
        <div
            data-testid={dataTestid}
            className="fel__http-error"
            style={{ margin, maxWidth }}
            {...moreProps}
        >
            {error}
        </div>
    );
}

HttpError.defaultProps = {
    maxWidth: 'initial',
    margin: '0',
    dataTestid: 'fel-http-error',
    moreProps: {},
};

export default HttpError;
