import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Categorie from './pages/Categorie'
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Join from './pages/Join';
import UserPrivateRoute from './components/routes/UserPrivateRoute';
import Address from './pages/Address';
import ManageProfile from './pages/ManageProfile';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import Spinner from './components/components/Spinner';
// import Button from './components/components/Button';

function App() {
  return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:slug' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/join' element={<Join/>}/>
    <Route path='/product/:slug' element={<SingleProduct/>}/>
    <Route path='/categories' element={<Categorie/>}/>
    <Route path='/spinner' element={<Spinner></Spinner>} />
    {/* <Route path="/button" element={<Button/>}/> */}



    {/* Routes for authenticated user*/}
    <Route path='/user' element={<UserPrivateRoute/>}>
      <Route path='/user/address' element={<Address/>}/>
      <Route path='/user/profile' element={<ManageProfile/>}/>
      <Route path='/user/payment' element={<Payment/>}/>
      <Route path='/user/orders' element={<Orders/>}/>
    </Route>


    <Route path="*"element={<NotFound/>}/>
  </Routes>
  )
}

export default App;
