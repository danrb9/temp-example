import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import { RouteConfig } from '../types/routes';

export const routes: RouteConfig[] = [
  {
    path: '/',
    content: Page1,
    sidebar: {}
  },
  {
    path: '/chat',
    content: Page3,
    sidebar: {
      left: Page2,
    }
  },
  {
    path: '/profile',
    content: Page1,
    sidebar: {
      right: Page3
    }
  },
  {
    path: '/another-page',
    content: Page3,
    sidebar: {
      left: Page3,
      right: Page3
    }
  },
]; 