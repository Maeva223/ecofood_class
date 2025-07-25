import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import { PublicLayout } from './components/PublicLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Dashboard } from './pages/Dashboard';
import { Productos } from './pages/Productos';
import { Perfil } from './pages/Perfil';
import { Ventas } from './pages/Ventas';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registro',
        element: <Registro />
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'productos',
        element: <Productos />
      },
      {
        path: 'perfil',
        element: <Perfil />
      },
      {
        path: 'ventas',
        element: <Ventas />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
]);
