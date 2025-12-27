import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Footer from '@/components/common/Footer';
import DataTable from '@/components/common/DataTable';
import { employees } from '@/data/employees';

const List = () => {

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 70, flex: 1 },
    { field: 'name', headerName: 'Name', minWidth: 200, flex: 1 },
    { field: 'title', headerName: 'Title', minWidth: 150, flex: 1 },
    { field: 'task', headerName: 'Task', minWidth: 100, flex: 1 },
    { field: 'rating', headerName: 'Rating', minWidth: 100, flex: 1 },
    { field: 'review', headerName: 'Review', minWidth: 100, flex: 1 },
    { field: 'onboarded', headerName: 'Onboarded', minWidth: 120, type: 'boolean', flex: 1 },
  ];
  
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1}}>
        
        <DataTable
          columns={columns}
          rows={employees}
          searchText=""
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialPageSize={10}
          title="Employees List"
        />

        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>
    </Stack>
  );
};

export default List;