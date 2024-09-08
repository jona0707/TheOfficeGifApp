import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TheOfficeGifApp } from './TheOfficeGifApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheOfficeGifApp  />
  </StrictMode>,
)
