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
import AdminHome from './pages/adminPages/AdminHome';
import AdminProducts from './pages/adminPages/AdminProducts';
import AdminCategories from './pages/adminPages/AdminCategories';
import AdminSubCategories from './pages/adminPages/AdminSubCategories';
import AdminOrders from './pages/adminPages/AdminOrders';
import AdminManageWebsite from './pages/adminPages/AdminManageWebsite';
import AdminUsers from './pages/adminPages/AdminUsers';
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

    <Route path='/admin' element={<UserPrivateRoute/>}>
      <Route path='dashboard' element={<AdminHome/>}/>
      <Route path='products' element={<AdminProducts/>}/>
      <Route path='categories' element={<AdminCategories/>}/>
      <Route path='sub-categories' element={<AdminSubCategories/>}/>
      <Route path='users' element={<AdminUsers/>}/>
      <Route path='orders' element={<AdminOrders/>}/>
      <Route path='settings' element={<AdminManageWebsite/>}/>
    </Route>


    <Route path="*"element={<NotFound/>}/>
  </Routes>
  )
}

export default App;
