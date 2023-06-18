// @flow

import * as React from 'react';

import Overlay from '../Overlay';
import utils from './utils';

const { doesPageHaveVerticalScroll } = utils;

type Props = {
    /** Modal content? */
    children: React.Node,
    /** Handle the onClose Modal event */
    handleOnModalClose: Function,
    /** Is Modal open */
    isOpen?: boolean,
    /** The value of your HTML body padding-right. e.g. '10px' => 10 */
    bodyPaddingRight?: number,
    /** Is the Modal closable when the user clics outside the dialog container? */
    isClosingOnClickOutside?: boolean,
    /** Is the Modal closable when the user hits the ESC button? */
    isClosingOnHitEscape?: boolean,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    contentWidth?: string,
    /** Does the overlay background-color have transparent light? */
    isLight?: boolean,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-dialogs-modal--default)
 */
function Modal({
    children,
    handleOnModalClose,
    isOpen,
    bodyPaddingRight,
    isClosingOnClickOutside,
    isClosingOnHitEscape,
    contentWidth,
    isLight,
    dataTestid,
    moreProps,
}: Props) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        const { body } = document;

        if (isOpen) {
            // $FlowFixMe
            body.style.paddingRight = doesPageHaveVerticalScroll()
                ? `${15 + bodyPaddingRight}px`
                : `${bodyPaddingRight || '0'}px`;
            // $FlowFixMe
            body.style.overflow = 'hidden';
        }

        setIsModalOpen(isOpen);

        return () => {
            // $FlowFixMe
            body.style.overflow = 'initial';
            // $FlowFixMe
            body.style.paddingRight = `${bodyPaddingRight}px`;
        };
    }, [isOpen, bodyPaddingRight]);

    const handleOnClickOutside = () => {
        /* istanbul ignore else */
        if (isModalOpen && isClosingOnClickOutside) {
            handleOnModalClose();
            setIsModalOpen(false);
        }
    };

    const handleOnHitEscape = () => {
        /* istanbul ignore else */
        if (isModalOpen && isClosingOnHitEscape) {
            handleOnModalClose();
            setIsModalOpen(false);
        }
    };

    const conditioanlContent = () => {
        if (isModalOpen) {
            return (
                <Overlay
                    handleOnClickOutside={handleOnClickOutside}
                    handleOnHitEscape={handleOnHitEscape}
                    contentWidth={contentWidth}
                    isLight={isLight}
                    dataTestid={dataTestid}
                    moreProps={moreProps}
                >
                    {children}
                </Overlay>
            );
        }

        return null;
    };

    return <>{conditioanlContent()}</>;
}

Modal.defaultProps = {
    isOpen: true,
    bodyPaddingRight: 0,
    isClosingOnClickOutside: false,
    isClosingOnHitEscape: false,
    contentWidth: 'initial',
    isLight: false,
    dataTestid: 'fel-modal',
    moreProps: {},
};

export default Modal;
