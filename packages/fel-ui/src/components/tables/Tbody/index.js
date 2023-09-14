// @flow

import React from 'react';

import Td from './Td';
import ItemLink from '../../ItemLink';
import type { TableColumn, TableRow } from '../../../flowTypes';

type TableColumnExtended = {
    ...TableColumn,
    isoDateOrNumber?: boolean,
};

type Props = {
    columns: Array<TableColumn> | Array<TableColumnExtended>,
    rows: Array<TableRow>,
};

function Tbody({ columns, rows }: Props) {
    const conditionalContent = (item: TableRow, propKey: string) => {
        if (item.href && item.href[propKey]) {
            return (
                <ItemLink href={item.href[propKey]}>{item[propKey]}</ItemLink>
            );
        }

        return item[propKey];
    };

    return (
        <tbody data-testid="fel-table-tbody">
            {rows.map((item: TableRow, index: number) => {
                return (
                    <tr key={index.toString()}>
                        {columns.map((el: TableColumn) => {
                            return (
                                <Td
                                    key={el.propKey}
                                    aligned={el.aligned}
                                    isMockedData={
                                        el.isMockedData
                                            ? el.isMockedData
                                            : false
                                    }
                                    isAccent={
                                        item.isAccent ? item.isAccent : false
                                    }
                                >
                                    {conditionalContent(item, el.propKey)}
                                </Td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

export default Tbody;
