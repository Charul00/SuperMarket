 
import './App.css';
import "@fontsource/poppins/400.css";
import {createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import router from './configs/route';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './actions/CartControl';
import { Toaster } from 'react-hot-toast';
function App() {
  
  return (
    <>
<Toaster position='top-right'/>
      <GoogleOAuthProvider clientId="1024591027781-7a07fpb7aflgaoqc8tgv9qsrd8ka8tdc.apps.googleusercontent.com">
        <CartProvider>
          <RouterProvider router={router}/>
        </CartProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App