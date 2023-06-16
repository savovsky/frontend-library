// @flow

import * as React from 'react';

import str from '../../utils/stringsUtils';
import Tooltip from '../Tooltip';
import ButtonIcon from '../buttons/ButtonIcon';
import SnackBarInfo from '../snackbars/SnackBarInfo';

import './index.scss';

// import utils from './utils';

type Props = {
    /** A string that needs to be copied */
    text: string,
    /** Where "copy" icon to use? */
    icon?: 'copy' | 'clone',
    /** Is the copy button disabled? */
    isDisabled?: boolean,
    /** Close the info snackbar after a certain duration in ms */
    autoHideSnackbarDuration?: number,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** Where the tooltip is displayed? */
    toolTipPlacement?: 'top' | 'right' | 'bottom' | 'left',
    /** What CSS 'top, right, bottom, left' value to use? *(Provide units, e.g. px)* */
    tooltipOffset?: string,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    tooltipWidth?: string,
    /** What tooltip title (content) to use? */
    tooltipContent?: string | React.Node,
    /** What success message (content) to use within the snackbar? */
    snackbarSuccessContent?: string | React.Node,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-copytoclipboard--default)
 */
function CopyToClipboard({
    text,
    icon,
    isDisabled,
    autoHideSnackbarDuration,
    margin,
    toolTipPlacement,
    tooltipOffset,
    tooltipWidth,
    tooltipContent,
    snackbarSuccessContent,
    dataTestid,
    moreProps,
}: Props) {
    const [isOpen, setIsOpen] = React.useState(false);

    // React.useEffect(() => {
    //     utils.propsValidation(text, icon);
    // }, [text, icon]);

    React.useEffect(() => {
        const timer = setTimeout(
            () => setIsOpen(false),
            autoHideSnackbarDuration,
        );

        return () => clearTimeout(timer);
    }, [isOpen, autoHideSnackbarDuration]);

    let snackbarMsg = snackbarSuccessContent || str.copyToClipboardSuccessMsg;

    const handleOnClick = async (e: SyntheticMouseEvent<HTMLDivElement>) => {
        e.currentTarget.blur();

        try {
            await window.navigator.clipboard.writeText(text);
            setIsOpen(true);
        } catch (err) {
            snackbarMsg = str.failedToCopy;
            setIsOpen(true);
        }
    };

    const conditionalContent = () => {
        if (isOpen) {
            return <SnackBarInfo content={snackbarMsg} />;
        }

        return null;
    };

    return (
        <div data-testid={dataTestid} style={{ margin }} {...moreProps}>
            <Tooltip
                content={tooltipContent || str.copyToClipboard}
                placement={toolTipPlacement}
                width={tooltipWidth}
                offset={tooltipOffset}
            >
                <ButtonIcon
                    handleOnClick={handleOnClick}
                    icon={icon || 'copy'}
                    arialabel="Copy to clipboard button"
                    isDisabled={isDisabled}
                />
            </Tooltip>
            {conditionalContent()}
        </div>
    );
}

CopyToClipboard.defaultProps = {
    icon: 'copy',
    isDisabled: false,
    autoHideSnackbarDuration: 2500,
    margin: 0,
    toolTipPlacement: 'top',
    tooltipOffset: '10px',
    tooltipWidth: 'auto',
    tooltipContent: str.copyToClipboard,
    snackbarSuccessContent: str.copyToClipboardSuccessMsg,
    dataTestid: 'fel-copy-to-clipboard',
    moreProps: {},
};

export default CopyToClipboard;
