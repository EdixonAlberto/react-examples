import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// IMPORTS
import '~/scss/main.scss'

// VIEWS
import { Auth } from '~/views/Auth'
import { Home } from '~/views/Home'
import { Login } from '~/views/Auth/Login'
import { NotFound } from '~/views/NotFound'
import { QR } from '~/views/QR'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Routes Private */}
        <Route element={<Auth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Routes Public */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/qr" element={<QR />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
