// @flow

const doesPageHaveVerticalScroll = () => {
    if (window.innerHeight) {
        // $FlowFixMe
        return document.body.offsetHeight > window.innerHeight;
    } else {
        return (
            // $FlowFixMe
            document.documentElement.scrollHeight >
                // $FlowFixMe
                document.documentElement.offsetHeight ||
            // $FlowFixMe
            document.body.scrollHeight > document.body.offsetHeight
        );
    }
};

export default {
    doesPageHaveVerticalScroll,
};
