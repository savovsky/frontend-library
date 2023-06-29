// @flow

import React, { useState, useEffect } from 'react';

import './index.scss';

import type { NavLink } from '../../../flowTypes';

type Props = {
    /** What collection of items to use for the nav links?
     *
     * `type Navlink = {id: string, lable: string }`
     */
    navItems: Array<NavLink>,
    /** Handle the selected link - onClick and onKeyPress(Enter) events */
    handleOnLinkSelect: Function,

    /** What is the ID of the default active link item?
     * If not provided the first list item will be used as a the default active one.
     */
    defaultActiveNavLinkId?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-sidenavbar-sidenavbarbasic--default)
 */
function SideNavBarBasic({
    navItems,
    handleOnLinkSelect,
    defaultActiveNavLinkId,
    dataTestid,
    moreProps,
}: Props) {
    const [activeNavLink, setActiveNavLink] = useState();

    useEffect(() => {
        if (defaultActiveNavLinkId) {
            setActiveNavLink(defaultActiveNavLinkId);
        } else {
            setActiveNavLink(navItems[0].id);
        }
    }, [defaultActiveNavLinkId, navItems]);

    const handleOnClick = (e: SyntheticMouseEvent<>, id: string) => {
        e.preventDefault();
        handleOnLinkSelect(id);
        setActiveNavLink(id);
    };

    const handleOnKeyPress = (e: SyntheticKetboardEvent<>, id: string) => {
        /* istanbul ignore else */
        if (e.key === 'Enter') {
            e.preventDefault();
            handleOnLinkSelect(id);
            setActiveNavLink(id);
        }
    };

    return (
        <nav
            className="fel__side-nav-bar"
            aria-label="List of links"
            data-testid={dataTestid}
            {...moreProps}
        >
            <ul>
                {navItems.map((item: NavLink, index: number) => {
                    return (
                        <li key={index.toString()}>
                            <a
                                href="/"
                                className={
                                    item.id === activeNavLink
                                        ? 'active-nav-link'
                                        : null
                                }
                                onClick={(e: SyntheticMouseEvent<>) =>
                                    handleOnClick(e, item.id)
                                }
                                onKeyPress={(e: SyntheticKetboardEvent<>) =>
                                    handleOnKeyPress(e, item.id)
                                }
                                data-testid="fel-side-nav-bar-link"
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

SideNavBarBasic.defaultProps = {
    defaultActiveNavLinkId: '',
    dataTestid: 'fel-side-nav-bar',
    moreProps: {},
};

export default SideNavBarBasic;
