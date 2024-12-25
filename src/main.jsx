import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify'

import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider >
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider >
    </AuthProvider>
    <ToastContainer/>
  </StrictMode>,
)
