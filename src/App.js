import './App.css';

import NavBar from './components/layouts/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Categorie from './pages/Categorie'
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Join from './pages/Join';

function App() {
  return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:slug' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<WishList/>}/>
    <Route path='/join' element={<Join/>}/>
    <Route path='/product/:slug' element={<SingleProduct/>}/>
    <Route path='/categories' element={<Categorie/>}/>
    <Route path="*"element={<NotFound/>}/>
  </Routes>
  )
}

export default App;
