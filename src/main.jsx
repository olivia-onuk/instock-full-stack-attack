import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactModal from 'react-modal';
import App from './App.jsx'
import './main.scss'

ReactModal.setAppElement('#root')

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
