import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const Page2: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <Box>
      <Typography variant="h4">PAGE 2 {id && <><br/>ID: {id}</>}</Typography>
    </Box>
  );
};

export default Page2; 