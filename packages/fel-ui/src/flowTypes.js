/* istanbul ignore file */
// @flow

export type TableColumn = {
    columnTitle: string | Object,
    propKey: string,
    aligned: string,
    isMockedData?: boolean, // TODO Rename to 'isMockData'
    isSortable?: boolean,
}

export type TableRow = {
    [key: string]: string | Object,
    isAccent?: boolean,
    href?: { [key: string]: string },
}

export type Option = {
    id: string,
    value: string,
}

export type NavLink = {
    id: string,
    label: string,
}
