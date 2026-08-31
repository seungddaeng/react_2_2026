import { createRoot } from 'react-dom/client'
import './index.css'
import EjemploLlaves from './EjemploLLave.tsx'
import Contador from './Contador.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <EjemploLlaves/>,
      <Contador/>
    </StrictMode>
)