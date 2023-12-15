import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart';
import { SearchProvider } from './context/search';
import { Auth } from './context/auth';
import { WishList } from './context/wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth>
    <SearchProvider>
      <WishList>
        <CartProvider>
            <BrowserRouter>
              <App /> 
            </BrowserRouter>
        </CartProvider>
      </WishList>
    </SearchProvider>
  </Auth>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
