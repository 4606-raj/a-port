import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Footer from '@/components/common/Footer';
import DataTable from '@/components/common/DataTable';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { projects } from '@/data/projects';

const List = () => {

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 70, flex: 1 },
    { field: 'title', headerName: 'Title', minWidth: 200, flex: 1 },
    { field: 'category', headerName: 'Category', minWidth: 150, flex: 1 },
    { 
      field: 'thumb', 
      headerName: 'Thumb', 
      minWidth: 100, 
      flex: 1,
      renderCell: (params) => (
        <img 
          className='tumbnail'
          src={params.value} 
          alt="thumbnail" 
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
      )
    },
    { field: 'progress', headerName: 'Progress', minWidth: 120, flex: 1 },
    { field: 'daysLeft', headerName: 'DaysLeft', minWidth: 120, flex: 1 },
  ];
  
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>

      
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1}}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h4">
            Projects List
          </Typography>

          <Button variant="contained" color="primary" style={{ textTransform: 'none' }}>
            Add New Project
          </Button>
        </div>
        
        <DataTable
          columns={columns}
          rows={projects}
          searchText=""
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialPageSize={10}
          title="Projects List"
        />

        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>
    </Stack>
  );
};

export default List;