// @flow

import React from 'react';

type Props = {
    title: string,
    aligned: string,
};

function Th({ title, aligned }: Props) {
    const conditionalClassName = () => {
        return aligned ? `align-${aligned}` : 'align-left';
    };

    return (
        <th>
            <div data-testid="fel-table-th" className={conditionalClassName()}>
                <span>{title}</span>
            </div>
        </th>
    );
}

export default Th;
