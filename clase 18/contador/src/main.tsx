import { createRoot } from 'react-dom/client'
import './index.css'
import EjemploLlave from './EjemploLLave.tsx'
import Contador from './Contador.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <EjemploLlave/>
      <Contador/>
    </StrictMode>
)