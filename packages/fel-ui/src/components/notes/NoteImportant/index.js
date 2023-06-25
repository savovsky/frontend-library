// @flow

import * as React from 'react';

import './index.scss';

type Props = {
    /** What note message (content) to use? */
    content: string | React.Node,
    /** What CSS 'max-width' value to use? *(Provide units, e.g. px)* */
    maxWidth?: string,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'padding' value to use? *(Provide units, e.g. px)* */
    padding?: string,
    /** Left or right-aligned note */
    aligned?: 'left' | 'right',
    /** What CSS 'font-size' value to use? *(Provide units, e.g. px)* */
    fontSize?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-notes-noteimportant--default)
 */
function NoteImportant({
    content,
    maxWidth,
    margin,
    padding,
    aligned,
    fontSize,
    dataTestid,
    moreProps,
}: Props) {
    const conditionalClassName = () => {
        const defaultClass = 'fel__note-important';

        return aligned === 'right'
            ? `${defaultClass} right-aligned`
            : `${defaultClass} left-aligned`;
    };

    return (
        <div
            data-testid={dataTestid}
            className={conditionalClassName()}
            style={{ maxWidth, margin, padding, fontSize }}
            {...moreProps}
        >
            {content}
        </div>
    );
}

NoteImportant.defaultProps = {
    maxWidth: 'initial',
    margin: '0',
    padding: '2px 10px',
    aligned: 'left',
    fontSize: '14px',
    dataTestid: 'fel-note-important',
    moreProps: {},
};

export default NoteImportant;
