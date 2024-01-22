import React from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import { LuShoppingCart } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import  formatCurrency,{format} from '../../ReusableFunctions/formatCurrency.js'

const AdminHome = () => {
  const items = [
    {
      key:"orders",
      value:1200
    },
    {
      key:"users",
      value:129900
    },
    {
      key:"products",
      value:100
    },
    {
      key:"revenue",
      value:120
    }
  ]
  return (
    <AdminLayout page={'dashboard'}>
      <div className='dashboard-items'>
        <div className='dashboard-item'>
          <span><LuShoppingCart/></span>
          <div className="dashboard-item-content">
            <span className='item-heading'>Orders</span>
            <span>{format(1500)}</span>
          </div>
        </div>
        <div className='dashboard-item'>
          <span><LiaProductHunt/></span>
          <div className="dashboard-item-content">
            <span className='item-heading'>Products</span>
            <span>{format(15000)}</span>
          </div>
        </div>
        <div className='dashboard-item'>
          <span><FiUser/></span>
          <div className="dashboard-item-content">
            <span className='item-heading'>Users</span>
            <span>{format(1000)}</span>
          </div>
        </div>
        <div className='dashboard-item'>
          <span><GiMoneyStack/></span>
          <div className="dashboard-item-content">
            <span className='item-heading'>Revenue</span>
            <span>{formatCurrency(1000)}</span>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
const Item = ({item})=>{
  return
}
export default AdminHome