import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { HelmetProvider } from 'react-helmet-async'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>,
)
