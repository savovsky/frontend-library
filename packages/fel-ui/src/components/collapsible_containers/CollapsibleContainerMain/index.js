// @flow

import * as React from 'react';

import './index.scss';

import ContainerHeader from './ContainerHeader';
import ContainerBody from './ContainerBody';
// import utils from './utils';

type Props = {
    /** What container title to use? */
    title: string,
    /** What CSS 'height' value to use? *(Provide units, e.g. px)* */
    bodyHeight: string,
    /** What collapsible container body content to use? */
    bodyContent: React.Node,
    /** What collapsible container header content to use? */
    headerContent?: React.Node | null,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** An initial state for the component */
    isCollapsed?: boolean,
    /** Handle the onClick (collapse toogle) event for the container */
    handleOnClickCollapse?: Function,
    /** Does the header have a border? */
    hasHeaderBorder?: boolean,
    /** What CSS 'text-transform' value to use for the title? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    titleTextTransform?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-containers-collapsiblecontainermain--default)
 */
function CollapsibleContainerMain({
    title,
    headerContent,
    bodyHeight,
    bodyContent,
    margin,
    isCollapsed,
    handleOnClickCollapse,
    hasHeaderBorder,
    titleTextTransform,
    dataTestid,
    moreProps,
}: Props) {
    const [isOpen, setIsOpen] = React.useState(!isCollapsed);

    React.useEffect(() => {
        setIsOpen(!isCollapsed);
    }, [isCollapsed]);

    // React.useEffect(() => {
    //     utils.propsValidation(handleOnClick);
    // }, [handleOnClick]);

    const handleOnClick = () => {
        /* istanbul ignore else */
        if (handleOnClickCollapse) {
            if (isOpen) {
                handleOnClickCollapse(-1);
            } else {
                handleOnClickCollapse(1);
            }
        }

        setIsOpen(!isOpen);
    };

    return (
        <div data-testid={dataTestid} style={{ margin }} {...moreProps}>
            <ContainerHeader
                title={title}
                isOpen={isOpen}
                handleOnClick={handleOnClick}
                headerContent={headerContent}
                hasBorder={hasHeaderBorder}
                textTransform={titleTextTransform}
            />
            <ContainerBody
                isOpen={isOpen}
                bodyHeight={bodyHeight}
                bodyContent={bodyContent}
            />
        </div>
    );
}

CollapsibleContainerMain.defaultProps = {
    headerContent: null,
    margin: '0 0 10px',
    isCollapsed: false,
    // eslint-disable-next-line no-unused-vars
    handleOnClickCollapse: (counter: number) => {},
    hasHeaderBorder: false,
    titleTextTransform: 'capitalize',
    dataTestid: 'fel-collapsible-container-main',
    moreProps: {},
};

export default CollapsibleContainerMain;
