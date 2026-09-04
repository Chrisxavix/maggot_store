import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MaggotShop } from './MaggotShop'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaggotShop></MaggotShop>
  </StrictMode>,
)
