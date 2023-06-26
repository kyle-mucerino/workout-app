import React from 'react';
import { Box, Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant='h4' gutterBottom>
        LIKE AN ATHLETE FITNESS
      </Typography>
      <Typography variant='body1' gutterBottom>
        Here's a message about the goal.
      </Typography>
      <Typography variant='body2' gutterBottom>
        Whether you're just getting started, a former athlete, or somewhere in between, we've got a regimine for you.
      </Typography>
      <Button variant='contained' color='primary'>
        Get Started
      </Button>
    </Box>
  );
};

export default HomePage;