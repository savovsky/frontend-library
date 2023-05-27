// @flow

import React from 'react';

import './index.scss';

type Props = {
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
};

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-loaders-loaderline--default)
 */
function LoaderLine({ dataTestid }: Props) {
    const elements = (n: number) =>
        [...Array(n)].map((e: any, index: number) => (
            <div key={`${index}`}>
                <div />
            </div>
        ));

    return (
        <div data-testid={dataTestid} className="fel__loader-line-container">
            <div className="fel__loader-line-wrapper">{elements(7)}</div>
        </div>
    );
}

LoaderLine.defaultProps = {
    dataTestid: 'fel-loader-line',
};

export default LoaderLine;
