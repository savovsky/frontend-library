// @flow

import * as React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** What container label (content) to use? */
    content: string | React.Node,
    /** What CSS 'padding' value to use? *(Provide units, e.g. px)* */
    padding?: string,
    /** What CSS 'text-transform' value to use? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
    /** What title style to use? */
    mode?: 'primary' | 'secondary' | 'tertiary',
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

const primary = 'primary';
const secondary = 'secondary';
const tertiary = 'tertiary';

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-title-titlecontainer--default)
 */
function TitleContainer({
    content,
    padding,
    textTransform,
    mode,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(content, mode);
    }, [content, mode]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__title-container';

        if (mode === secondary) {
            return `${defaultClass} ${secondary}`;
        } else if (mode === tertiary) {
            return `${defaultClass} ${tertiary}`;
        } else {
            return `${defaultClass} ${primary}`;
        }
    };

    return (
        <div
            data-testid={dataTestid}
            className={conditionalClassName()}
            style={{ padding, textTransform }}
            {...moreProps}
        >
            {content}
        </div>
    );
}

TitleContainer.defaultProps = {
    padding: '0 0 15px',
    textTransform: 'capitalize',
    mode: primary,
    dataTestid: 'fel-title-container',
    moreProps: {},
};

export default TitleContainer;
