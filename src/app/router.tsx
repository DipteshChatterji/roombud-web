import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../features/legal/HomePage';
import { LegalPage } from '../features/legal/LegalPage';
import { TermsIndexPage } from '../features/legal/TermsIndexPage';
import { PublicLayout } from '../shared/components/PublicLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'terms', element: <TermsIndexPage /> },
      { path: ':slug', element: <LegalPage /> },
    ],
  },
  {
    path: '/admin/*',
    element: <Navigate to="/" replace />,
  },
]);
