// @flow

import React from 'react';

import './index.scss';

type Props = {
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
};

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-loaders-loaderspin--default)
 */
function LoaderSpin({ dataTestid }: Props) {
    const elements = (n: number) =>
        [...Array(n)].map((e: any, index: number) => (
            <div key={`${index}`}>
                <div />
            </div>
        ));

    return (
        <div data-testid={dataTestid} className="fel__loader-spin-container">
            <div className="fel__loader-spin-wrapper">{elements(8)}</div>
        </div>
    );
}

LoaderSpin.defaultProps = {
    dataTestid: 'fel-loader-spin',
};

export default LoaderSpin;
