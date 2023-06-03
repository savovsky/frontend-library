import React from 'react';

import TitleContainer from '../../packages/fel-ui/src/components/title/TitleContainer';

const Content = () => {
    return (
        <TitleContainer
            content="item four"
            moreProps={{
                style: {
                    padding: '0',
                    fontSize: '16px',
                    textTransform: 'unset',
                },
            }}
        />
    );
};

export default {
    default: [
        { content: 'item one', handleOnClick: () => {} },
        { content: 'item two', handleOnClick: () => {} },
        { content: 'item three' },
    ],
    lastNodeComponent: [
        { content: 'item one', handleOnClick: () => {} },
        { content: 'item two', handleOnClick: () => {} },
        { content: 'item three', handleOnClick: () => {} },
        { content: Content() },
    ],
};
