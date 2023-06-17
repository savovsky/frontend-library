// @flow

import * as React from 'react';

import CollapseArrow from './CollapseArrow';
import TitleContainer from '../../../title/TitleContainer';

type Props = {
    title: string,
    isOpen: boolean,
    handleOnClick: Function,
    headerContent?: React.Node | null,
    hasBorder?: boolean,
    textTransform?: string,
};

function ContainerHeader({
    title,
    isOpen,
    handleOnClick,
    headerContent,
    hasBorder,
    textTransform,
}: Props) {
    const conditionalClassName = () => {
        const defaultClass = 'fel__collapsible-container-main-header';

        return hasBorder ? `${defaultClass} border` : defaultClass;
    };

    return (
        <div
            data-testid="fel-collapsible-container-main-header"
            className={conditionalClassName()}
        >
            <button
                type="button"
                data-testid="fel-collapse-btn"
                className="fel__collapsible-container-main-btn"
                onClick={handleOnClick}
            >
                <CollapseArrow isOpen={isOpen} />
                <TitleContainer
                    content={title}
                    padding="0 0 0 10px"
                    textTransform={textTransform}
                />
            </button>
            {headerContent}
        </div>
    );
}

ContainerHeader.defaultProps = {
    headerContent: null,
    hasBorder: false,
    textTransform: 'capitalize',
};

export default ContainerHeader;
