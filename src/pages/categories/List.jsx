import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Footer from '@/components/common/Footer';
import DataTable from '@/components/common/DataTable';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { clients } from '@/data/clients';

const List = () => {

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 70, flex: 1 },
    { field: 'name', headerName: 'name', minWidth: 200, flex: 1 },
    { field: 'email', headerName: 'Email', minWidth: 150, flex: 1 },
    { field: 'contact', headerName: 'Contact', minWidth: 150, flex: 1 },
  ];
  
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>

      
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1}}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h4">
            Clients List
          </Typography>

          <Button variant="contained" color="primary" style={{ textTransform: 'none' }}>
            Add New Client
          </Button>
        </div>
        
        <DataTable
          columns={columns}
          rows={clients}
          searchText=""
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialPageSize={10}
        />

        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>
    </Stack>
  );
};

export default List;