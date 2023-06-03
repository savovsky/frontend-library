// @flow

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import ButtonLink from '../buttons/ButtonLink';

type BreadcrumbItem = {
    content: string | React.Node,
    handleOnClick?: Function,
};

type Props = {
    /**
     * An array of objects. Each object corresponds to a breadcrumb item.
     */
    breadcrumbs: Array<{
        // What breadcrumb label (content) to use?
        content: string | React.Node,
        // Optional prop. Handles the breadcrumb onClick event. Usually, the last item does not have this prop
        handleOnClick: Function,
    }>,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'text-transform' value to use? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    linksTextTransform?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-breadcrumbs--default)
 */
function Breadcrumbs({
    breadcrumbs,
    margin,
    linksTextTransform,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            className="fel__breadcrumbs"
            data-testid={dataTestid}
            role="presentation"
            style={{ margin }}
            {...moreProps}
        >
            <nav aria-label="breadcrumbs">
                <ol>
                    {breadcrumbs.map((item: BreadcrumbItem, index: number) => {
                        if (item.handleOnClick) {
                            return (
                                <li key={index.toString()}>
                                    <ButtonLink
                                        handleOnClick={item.handleOnClick}
                                        content={item.content}
                                        textTransform={linksTextTransform}
                                    />
                                    <span className="fel__breadcrumbs-separator">
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            size="1x"
                                        />
                                    </span>
                                </li>
                            );
                        }

                        return <li key={index.toString()}>{item.content}</li>;
                    })}
                </ol>
            </nav>
        </div>
    );
}

Breadcrumbs.defaultProps = {
    margin: '0',
    linksTextTransform: 'capitalize',
    dataTestid: 'fel-breadcrumbs',
    moreProps: {},
};

export default Breadcrumbs;
