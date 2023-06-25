// @flow

import * as React from 'react';

import './index.scss';

import str from '../../../utils/stringsUtils';

type Props = {
    /** What note message (content) to use? */
    content?: string | React.Node,
    /** What CSS 'max-width' value to use? *(Provide units, e.g. px)* */
    maxWidth?: string,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'padding' value to use? *(Provide units, e.g. px)* */
    padding?: string,
    /** What CSS 'text-align' value to use? */
    textAligned?: 'left' | 'center' | 'right',
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-notes-notenoitems--default)
 */
function NoteNoItems({
    content,
    maxWidth,
    margin,
    padding,
    textAligned,
    fontSize,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            data-testid={dataTestid}
            className="fel__note_no-items"
            style={{ maxWidth, margin, padding, fontSize, textAligned }}
            {...moreProps}
        >
            {content}
        </div>
    );
}

NoteNoItems.defaultProps = {
    content: str.noItems,
    maxWidth: 'initial',
    margin: '0',
    padding: '0 28px',
    textAligned: 'left',
    fontSize: '12px',
    dataTestid: 'fel-note-no-items',
    moreProps: {},
};

export default NoteNoItems;
