import React from 'react';

import TitleContainer from '../../packages/fel-ui/src/components/title/TitleContainer';

export default {
    default: ['Step One', 'Step Two', 'Step Three'],
    nodesReactComponents: [
        <>
            <div>Provide</div>
            <div>Name</div>
        </>,
        <>
            <div>Provide</div>
            <div>Address</div>
        </>,
        <>
            <div>Select</div>
            <div>Country</div>
        </>,
        <TitleContainer key="foo" content="item four" />,
    ],
};
