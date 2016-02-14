// var agGrid = require('ag-grid');
// require('ag-grid/dist/styles/theme-fresh.css');
// require('ag-grid/dist/styles/ag-grid.css');

var eGridContainer = document.querySelector('#gridContainer');

var gridOptions = {
    columnDefs: [
        {headerName: '', checkboxSelection: true, cellClass: 'ag-grid-checkbox-column', width: 60 },
        {headerName: 'Record', field: 'recordNumber'},
        {headerName: 'Value 1', field: 'value1'},
        {headerName: 'Value 2', field: 'value2'}
    ],
    enableSorting: true,
    rowData: [],
    onGridReady: function(params) {
        params.api.sizeColumnsToFit();
    },
    rowHeight: 48,
    headerHeight: 56
};

for (var i = 0; i<100; i++) {
    gridOptions.rowData.push({
        recordNumber: i,
        value1: Math.floor(Math.random() * 10000),
        value2: Math.floor(Math.random() * 10000)
    });
}

new agGrid.Grid(eGridContainer, gridOptions);
