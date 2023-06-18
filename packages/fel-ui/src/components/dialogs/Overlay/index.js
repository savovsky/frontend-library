// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

type Props = {
    children: React.Node,
    handleOnClickOutside: Function,
    handleOnHitEscape: Function,
    contentWidth?: string,
    isLight?: boolean,
    dataTestid?: string,
    moreProps?: Object,
};

type Ref = { current: any };
type Root = HTMLElement;

function Overlay({
    children,
    handleOnClickOutside,
    handleOnHitEscape,
    contentWidth,
    isLight,
    dataTestid,
    moreProps,
}: Props) {
    const overlayRoot: Root = document.getElementsByTagName('body')[0];
    const content: Ref = React.createRef();

    const handleKeyPress = (event: any) => {
        /* istanbul ignore else */
        if (event && event.keyCode === 27) {
            handleOnHitEscape();
        }
    };

    React.useEffect(() => {
        content.current.focus();
        document.addEventListener('keydown', handleKeyPress);

        return () => document.removeEventListener('keydown', handleKeyPress);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const conditionalClassName = () => {
        const defaultClass = 'fel__modal-overlay';

        return isLight ? `${defaultClass} light` : defaultClass;
    };

    return ReactDOM.createPortal(
        <div
            data-testid={dataTestid}
            role="presentation"
            className={conditionalClassName()}
            onClick={handleOnClickOutside}
            {...moreProps}
        >
            <div
                ref={content}
                data-testid="fel-overlay-content-wrapper"
                // TODO
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex="0"
                style={{ width: contentWidth }}
                onClick={(e: SyntheticMouseEvent<HTMLDivElement>) =>
                    e.stopPropagation()
                }
                onKeyPress={(e: SyntheticKeyboardEvent<>) =>
                    e.stopPropagation()
                }
            >
                {children}
            </div>
        </div>,
        overlayRoot,
    );
}

export default Overlay;
