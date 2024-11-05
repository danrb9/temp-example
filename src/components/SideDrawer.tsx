import React from 'react';
import { Drawer, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 300,
  padding: theme.spacing(2),
}));

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
  anchor: 'left' | 'right';
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open, onClose, anchor, children }) => {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          width: 300,
        },
      }}
    >
      <DrawerContent>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer; 