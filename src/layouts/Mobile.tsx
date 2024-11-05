import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import SideDrawer from '../components/SideDrawer';
import NavigationMenu from '../components/Menu';

interface MobileLayoutProps {
  leftSidebarContent: React.ReactNode;
  rightSidebarContent: React.ReactNode;
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  leftSidebarContent,
  rightSidebarContent,
  children
}) => {
  const location = useLocation();
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  useEffect(() => {
    setLeftDrawerOpen(false);
    setRightDrawerOpen(false);
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2 
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <IconButton onClick={() => setLeftDrawerOpen(!leftDrawerOpen)}>
                <MenuIcon />
              </IconButton>
              <IconButton onClick={() => setRightDrawerOpen(!rightDrawerOpen)}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <NavigationMenu />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer
        open={leftDrawerOpen}
        onClose={() => setLeftDrawerOpen(false)}
        anchor="left"
      >
        {leftSidebarContent}
      </SideDrawer>

      <Container sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>

      <SideDrawer
        open={rightDrawerOpen}
        onClose={() => setRightDrawerOpen(false)}
        anchor="right"
      >
        {rightSidebarContent}
      </SideDrawer>
    </Box>
  );
};

export default MobileLayout; 