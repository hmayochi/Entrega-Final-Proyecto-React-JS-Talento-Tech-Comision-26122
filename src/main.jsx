import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom"; // 👈 IMPORTANTE
import { CartProvider } from "./context/CartContext"; // Importamos el CartProvider para envolver toda la aplicación y proporcionar el contexto del carrito de compras a todos los componentes
import { AuthProvider } from "./context/AuthContext.jsx"; // Importamos el AuthProvider para envolver toda la aplicación y proporcionar el contexto de autenticación a todos los componentes  




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/*  */}
    <AuthProvider>  {/* Agregamos el AuthProvider para envolver toda la aplicación y proporcionar el contexto de autenticación a todos los componentes */}
      <CartProvider >  {/* Agregamos el CartProvider para envolver toda la aplicación y proporcionar el contexto del carrito de compras a todos los componentes */}
      <App />
      </CartProvider>  {/* Agregamos el CartProvider para envolver toda la aplicación y proporcionar el contexto del carrito de compras a todos los componentes */}
    </AuthProvider>  {/* Agregamos el AuthProvider para envolver toda la aplicación y proporcionar el contexto de autenticación a todos los componentes */}
    </BrowserRouter>
  </StrictMode>,
)
