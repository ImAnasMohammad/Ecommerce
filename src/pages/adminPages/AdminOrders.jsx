import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout'
import SingleOrderItem from '../../components/templates/admin/SingleOrderItem';

const AdminOrders = () => {
  const [currentDailougContent,setCurrentDailougContent] = useState(null);
  const [title,setTitle] = useState('Conformation');
  const [searchQuery,setSearchQuery] = useState('');

  const handleChange = (id,value)=>{
    console.log(id,value)
  }

  const orders = [
    {
      id:'sf98ds9u',
      sku:'AXN-43',
      price:34333,
      size:'s',
      color:'red',
      status:0
    },
    {
      id:'rtwrwfsdfsdfds',
      sku:'AYRN-43',
      price:23,
      size:'s',
      color:'red',
      status:1
    },
    {
      id:'rgerfsdfsdfsd',
      sku:'AXN-434',
      price:0,
      size:'s',
      color:'red',
      status:2
    },
    {
      id:'sf98ds9u',
      sku:'AXN-43',
      price:34333,
      size:'M',
      color:'red',
      status:3
    },
  ]
  return (
      <AdminLayout
      dailogTitle={title}
      currentDailougContent={currentDailougContent}
      setCurrentDailougContent={setCurrentDailougContent}
      page={'orders'}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      >     
      <table>
        <thead>
          <tr>
            <td>ORDER ID</td>
            <td>SKU</td>
            <td>PRICE</td>
            <td>SIZE</td>
            <td>COLOR</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map(order=><SingleOrderItem key={order?.id} order={order} handleChange={handleChange}/>)
          }
        </tbody>
      </table>

    </AdminLayout>
  )
}

export default AdminOrders