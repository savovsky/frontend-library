// @flow

import * as React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** What label (content) to use? */
    content: string | React.Node,
    /** What CSS 'padding' value to use? *(Provide units, e.g. px)* */
    padding?: string,
    /** What CSS 'text-transform' value to use? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-title-titlepage--default)
 */
function TitlePage({
    content,
    padding,
    textTransform,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(content);
    }, [content]);

    return (
        <h1
            data-testid={dataTestid}
            className="fel__title-page"
            style={{ padding, textTransform }}
            {...moreProps}
        >
            {content}
        </h1>
    );
}

TitlePage.defaultProps = {
    padding: '0',
    textTransform: 'capitalize',
    dataTestid: 'fel-title-page',
    moreProps: {},
};

export default TitlePage;
