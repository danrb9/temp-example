import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DesktopLayout from './layouts/Desktop';
import MobileLayout from './layouts/Mobile';
import Page2 from './pages/Page2';
import { routes } from './config/routes';

// Wrapper component to handle dynamic sidebar content
const LayoutWrapper = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const location = useLocation();

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const Layout = isMobile ? MobileLayout : DesktopLayout;

  // Define dynamic sidebar content based on current route
  const getSidebarContent = () => {
    const currentRoute = routes.find(route => route.path === location.pathname) 
      ?? routes.find(route => route.path === '/');
    
    return {
      left: currentRoute?.sidebar?.left ? <currentRoute.sidebar.left /> : null,
      right: currentRoute?.sidebar?.right ? <currentRoute.sidebar.right /> : <Page2 />
    };
  };

  const { left, right } = getSidebarContent();

  return (
    <Layout
      leftSidebarContent={left}
      rightSidebarContent={right}
    >
      <Routes>
        {routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            element={<route.content />}
          />
        ))}
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LayoutWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 