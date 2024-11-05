export interface RouteConfig {
  path: string;
  content: React.ComponentType;
  sidebar?: {
    left?: React.ComponentType | null;
    right?: React.ComponentType | null;
    defaultOpen?: boolean;
  };
} 