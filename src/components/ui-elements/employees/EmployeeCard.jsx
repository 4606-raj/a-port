import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconifyIcon from '@/components/base/IconifyIcon';

const EmployeeCard = ({ data }) => {
  return (
    <Card sx={{ userSelect: 'none' }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack alignItems="center" spacing={1}>
          <Avatar
            src={data.avatar}
            component={Link}
            href="#!"
            sx={{
              height: 48,
              width: 48,
              bgcolor: 'primary.main',
            }}
          />
          <CardContent>
            <Typography
              component={Link}
              href="#!"
              variant="subtitle1"
              color="text.primary"
              fontWeight={600}
            >
              {data.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {data.title}
            </Typography>
          </CardContent>
        </Stack>

        <CardActions disableSpacing>
          <Button
            variant="text"
            size="medium"
            sx={{
              color: data.onboarded ? 'text.secondary' : 'primary.main',
              '& .MuiButton-startIcon': { mr: 0, pointerEvents: 'none' },
            }}
            // startIcon={data.onboarded ? '' : <IconifyIcon icon="gridicons:plus-small" />}
            fullWidth
          >
            {data.onboarded ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#8fbffa" d="M12 6.25H1v2h5.708a7.98 7.98 0 0 0-2.708 6h2a6 6 0 0 1 12 0h2a7.98 7.98 0 0 0-2.708-6H23v-2z"/><path fill="#46c8f5" d="M10 5.25h4v4h-4zm11.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M5 18.75a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></g></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#2859c5" d="M16.75 19.25V23h2.5v-3.75H23v-2.5h-3.75V13h-2.5v3.75H13v2.5z"/><path fill="#46c8f5" d="M1 1h10v10H1zm0 12h10v10H1zM23 1H13v10h10z"/></g></svg>}
          </Button>
        </CardActions>
      </Stack>

      <CardContent sx={{ mt: 2.75 }}>
        <Stack alignItems="center" justifyContent="space-between">
          <Stack alignItems="center" spacing={0.875}>
            <IconifyIcon icon="hugeicons:note" color="text.secondary" fontSize="h4.fontSize" />
            <Typography color="text.primary" fontSize="body2.fontSize" fontWeight={600}>
              {data.task} Task
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
