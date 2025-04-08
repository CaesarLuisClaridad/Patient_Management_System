import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../redux/store.jsx'
// import 'boxicons/css/boxicons.min.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css";  // Import FontAwesome CSS
import 'bootstrap'; // Import Bootstrap JS functionality
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)
