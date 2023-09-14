export default {
    default: {
        columns: [
            {
                columnTitle: 'name',
                propKey: 'userName',
                // aligned: left | center | right
                // align left is default
                aligned: '',
            },
            {
                columnTitle: 'date',
                propKey: 'createdDate',
                aligned: 'center',
                isoDateOrNumber: true,
            },
        ],
        rows: [
            {
                userName: 'Miroslav Savovski',
                createdDate: 'Jul 5, 2022',
                isoDateOrNumber: {
                    createdDate: 1657010000,
                },
            },
            {
                userName: 'John Doe',
                createdDate: 'Apr 15, 2022',
                isoDateOrNumber: {
                    createdDate: 1650011600,
                },
            },
        ],
    },
};
