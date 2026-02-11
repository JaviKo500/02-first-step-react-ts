import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirstStepsApp } from './FirstStepApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
  </StrictMode>,
)
