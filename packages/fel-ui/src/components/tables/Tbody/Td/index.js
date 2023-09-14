// @flow

import React from 'react';

type Props = {
    children: any,
    aligned: string,
    isAccent?: boolean,
    isMockedData?: boolean,
};

function Td({ children, aligned, isAccent, isMockedData }: Props) {
    const conditionalClassName = () => {
        if (isMockedData) {
            return aligned ? `align-${aligned} mockup` : 'mockup';
        } else if (isAccent) {
            return aligned ? `align-${aligned} accent` : 'accent';
        }

        return aligned ? `align-${aligned}` : '';
    };

    return (
        <td>
            <div data-testid="fel-table-td" className={conditionalClassName()}>
                {children}
            </div>
        </td>
    );
}

Td.defaultProps = {
    isAccent: false,
    isMockedData: false,
};

export default Td;
