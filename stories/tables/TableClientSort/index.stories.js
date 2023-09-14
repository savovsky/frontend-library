import React from 'react';

import { TableClientSort } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/radioButtons/RadioButtonBasic/README.md';
import mockup from './mockup';

export default {
    title: 'UI/tables/TableClientSort',
    component: TableClientSort,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
        controls: { hideControlsWarning: true },
    },
    argTypes: {
        handleOnColumnSort: { action: 'click sort', control: false },
    },
};

const Template = args => {
    return (
        <TableClientSort
            {...args}
            handleOnColumnSort={(columnId, isAscending) => {
                // eslint-disable-next-line react/destructuring-assignment
                args.handleOnColumnSort(columnId, isAscending);
            }}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    columns: mockup.default.columns,
    rows: mockup.default.rows,
    initialSortedColumnId: 'userName',
    isInitialSortingAscending: true,
};
