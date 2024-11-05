import React from 'react';
import { Box, AppBar, Toolbar, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SideDrawer from '../components/SideDrawer';
import NavigationMenu from '../components/Menu';
import { routes } from '../config/routes';

interface DesktopLayoutProps {
  leftSidebarContent: React.ReactNode;
  rightSidebarContent: React.ReactNode;
  children: React.ReactNode;
}

const DRAWER_WIDTH = 300;

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  leftSidebarContent,
  rightSidebarContent,
  children
}) => {
  const location = useLocation();
  const currentRoute = routes.find(route => route.path === location.pathname);
  
  const showLeftSidebar = Boolean(currentRoute?.sidebar?.left);
  const showRightSidebar = Boolean(currentRoute?.sidebar?.right);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideDrawer
        open={showLeftSidebar}
        onClose={() => {}}
        anchor="left"
      >
        {leftSidebarContent}
      </SideDrawer>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        flexGrow: 1,
      }}>
        <AppBar 
          position="static" 
          color="default" 
          elevation={1}
          sx={{
            width: '100%',
          }}
        >
          <Toolbar sx={{ justifyContent: 'center' }}>
            <NavigationMenu />
          </Toolbar>
        </AppBar>
        <Container 
          sx={{ 
            flexGrow: 1, 
            py: 3,
            maxWidth: '800px !important',
            mx: 'auto',
          }}
        >
          {children}
        </Container>
      </Box>

      <SideDrawer
        open={showRightSidebar}
        onClose={() => {}}
        anchor="right"
      >
        {rightSidebarContent}
      </SideDrawer>
    </Box>
  );
};

export default DesktopLayout; 