// @flow

import React from 'react';

import Th from './Th';
import type { TableColumn } from '../../../flowTypes';

type Props = {
    columns: Array<TableColumn>,
};

function Thead({ columns }: Props) {
    return (
        <thead>
            <tr>
                {columns.map((el: TableColumn) => (
                    <Th
                        key={el.propKey}
                        title={el.columnTitle}
                        aligned={el.aligned}
                    />
                ))}
            </tr>
        </thead>
    );
}

export default Thead;
