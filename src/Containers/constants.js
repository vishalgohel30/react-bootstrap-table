// Table Header columns

export const columns = [{
    dataField: 'id',
    text: 'ID',
    key: true,
    dataSort: true
}, {
    dataField: 'name',
    text: 'Name',
    key: false,
    dataSort: true
}, {
    dataField: 'mode',
    text: 'Mode',
    key: false,
    dataSort: true
}, {
    dataField: 'origin',
    text: 'Origin',
    key: false,
    dataSort: true
}, {
    dataField: 'status',
    text: 'Status',
    key: false,
    dataSort: true
}, {
    dataField: 'total',
    text: 'Total',
    key: false,
    dataSort: true
}, {
    dataField: 'type',
    text: 'Type',
    key: false,
    dataSort: true
}, {
    dataField: 'userId',
    text: 'User Id',
    key: false,
    dataSort: true
}, {
    dataField: 'destination',
    text: 'Destination',
    key: false,
    dataSort: true
}
];

// Table  Features
export const features = {
    pagination: true,
    search: true,
    noDataText: '',
    defaultSortName: {
        defaultSortName: 'id',  // default sort column name
        defaultSortOrder: 'asc'  // default sort order desc
    }
}  