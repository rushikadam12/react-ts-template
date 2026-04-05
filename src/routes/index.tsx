
import { createBrowserRouter } from 'react-router-dom';
import type {RouteObject} from "react-router-dom"
import DashboardPage from '@/pages/DashbaordPage';
import { DashboardLayout } from '@/layouts/DashboardLayout';
// Define routes using the RouteObject type for strict typing
const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      
    ],
  },
];

export const router = createBrowserRouter(routes);
