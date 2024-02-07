import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout'
import { useLoading } from '../../context/loading';
import ConfrimContent from '../../components/layouts/ConfrimContent';
import img from '../../img/p1.webp';
import SingleProductItem from '../../components/templates/admin/SingleProductItem';

const AdminProducts = () => {
  const [currentDailougContent,setCurrentDailougContent] = useState(null);
  const [title,setTitle] = useState('Conformation');
  const [searchQuery,setSearchQuery] = useState('');
  const [loading,setLoading] = useLoading(2);
  const [dailogTitle,setDailogTitle] = useState(null);


  const handleSearch = ()=>{

  }

  const handleCreate = ()=>{

  }

  const handleCLick = (item)=>{
    setCurrentDailougContent(
      <ConfrimContent
        handleClick={handleDelete}
        content={`Are you sure ? would you like to delete ${item?.name} ?`}
        label="Delete"
        bgColor={'red'}
        id={item?.id}
        title={title}
      />
    );
  }

  const handleDelete = ()=>{
    
  }
  const handleChange = ()=>{

  }


  const products = [
    {
      sku:'AZD-12',
      img,
      date:'2024 11 dec',
      status:0,
      name:'product 1'
    },
    {
      sku:'AZD2-12',
      img,
      date:'2024 11 dec',
      status:1,
      name:'product 3DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD'
    },
    {
      sku:'A2ZD-12',
      img,
      date:'2024 11 dec',
      status:0,
      name:'product 2'
    }
  ]

  return (
    <AdminLayout
      page="Product"
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      handleSearch={handleSearch}
      setCurrentDailougContent={setCurrentDailougContent}
      handleCreate={handleCreate}
      currentDailougContent={currentDailougContent}
      dailogTitle={dailogTitle}
    >
      <table>
        <thead>
          <tr>
            <td>SKU</td>
            <td>IMAGE</td>
            <td>NAME</td>
            <td>CREATED AT</td>
            <td>STATUS</td>
            <td>TOTAL QUNTITY</td>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product,i)=><SingleProductItem key={i} product={product} handleChange={handleChange} handleCLick={handleCLick} />)
          }
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default AdminProducts

