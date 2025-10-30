import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Navbar from './components/commons/Navbar.tsx'
import Footer from './components/commons/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>,
)
