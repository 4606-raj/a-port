import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Projects from '@/components/ui-elements/projects';
import TaskTable from '@/components/ui-elements/tasks';
import Employees from '@/components/ui-elements/employees';
import Footer from '@/components/common/Footer';

const Profile = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1}}>
        <Stack
          width={1}
          spacing={3.5}
          direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'row' }}
        >
        </Stack>

        <Box className="">
          <Box>Profile Image</Box>
          <Box>Personal & Contact Details</Box>
        </Box>

        <Employees />
        <Projects />
        <TaskTable />

        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Profile;
