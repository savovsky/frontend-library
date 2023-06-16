// @flow

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExclamationCircle,
    faExclamationTriangle,
    faInfoCircle,
    faCheckCircle,
    faCircle,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

// TODO Add props validation
// import utils from './utils';

type Props = {
    /** What message (content) to use? */
    content: string | React.Node,
    /** What snackbar icon (style) to use? */
    mode?: 'error' | 'warning' | 'info' | 'success',
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
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

const error = 'error';
const warning = 'warning';
const info = 'info';
const success = 'success';

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-snackbars-snackbarinfo--default)
 */
function SnackBarInfo({
    content,
    mode,
    textTransform,
    dataTestid,
    moreProps,
}: Props) {
    // TODO Add propsvalidation
    // React.useEffect(() => {
    //     utils.propsValidation(content, mode);
    // }, [content, mode]);

    const conditionalIcon = () => {
        switch (mode) {
            case error: {
                return faExclamationCircle;
            }

            case warning: {
                return faExclamationTriangle;
            }

            case info: {
                return faInfoCircle;
            }

            case success: {
                return faCheckCircle;
            }

            default:
                return faCircle;
        }
    };

    return (
        <div
            role="presentation"
            className="fel__snackbar-container"
            data-testid={dataTestid}
            style={{ textTransform }}
            {...moreProps}
        >
            <div role="alert" className="fel__snackbar-body">
                <FontAwesomeIcon icon={conditionalIcon()} size="lg" />
                <span className="fel__snackbar-content">{content}</span>
            </div>
        </div>
    );
}

SnackBarInfo.defaultProps = {
    mode: info,
    textTransform: 'none',
    dataTestid: 'fel-snackbar-info',
    moreProps: {},
};

export default SnackBarInfo;
