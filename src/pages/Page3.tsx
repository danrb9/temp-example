import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const Page3: React.FC = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('param');

  return (
    <Box>
      <Typography variant="h4">PAGE 3 {param && <><br/>param: {param}</>}</Typography>
    </Box>
  );
};

export default Page3; 