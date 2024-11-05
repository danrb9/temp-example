import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={Link}
        to="/temp-example"
        variant="contained"
        color="primary"
      >
        Main
      </Button>
      <Button
        component={Link}
        to="/chat?id=8737656"
        variant="contained"
        color="primary"
      >
        Chat
      </Button>
      <Button
        component={Link}
        to="/profile?param=data010100"
        variant="contained"
        color="primary"
      >
        Profile
      </Button>
      <Button
        component={Link}
        to="/another-page"
        variant="contained"
        color="primary"
      >
        Another Page
      </Button>
    </Box>
  );
};

export default NavigationMenu; 