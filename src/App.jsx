import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayout from './layout/app-layout';
import Landing from './pages/landing';
import Onboarding from './pages/onboarding';
import Job from './pages/job';
import Joblisting from './pages/job-listing';
import Postjob from './pages/post-job';
import Savedjob from './pages/saved-job';
import Myjobs from './pages/my-jobs';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from "./components/protected-route";

const router =createBrowserRouter([
  {
    element: < Applayout />,
    children: [
      {
        path: "/",
        element: <Landing/>,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Joblisting />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <Postjob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <Myjobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <Savedjob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
   return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
   );
}

export default App;
