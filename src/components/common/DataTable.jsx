import { useEffect } from 'react';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DataGridFooter from '@/components/common/DataGridFooter';

const DataTable = ({ columns, rows, searchText, pageSizeOptions = [5], initialPageSize = 10, checkboxSelection = false, title }) => {
  const apiRef = useGridApiRef();

  useEffect(() => {
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText, apiRef]);

  return (
    <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1 }}>

      {title && (
        <Typography variant="h4" minWidth={200}>
          {title}
        </Typography>
      )}
      
      <DataGrid
        sx={{ padding: 3.5, boxShadow: 3, width: '100%' }}
        apiRef={apiRef}
        columns={columns}
        rows={rows}
        rowHeight={60}
        disableColumnResize
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize: initialPageSize } },
        }}
        slots={{
          pagination: DataGridFooter,
        }}
        checkboxSelection={checkboxSelection}
        pageSizeOptions={pageSizeOptions}
      />
    </Stack>
  );
};

export default DataTable;
