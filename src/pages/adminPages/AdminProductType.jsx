import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import SingleCategoryItem from '../../components/templates/admin/SingleCategoryItem';
import ConfrimContent from '../../components/layouts/ConfrimContent';
import SubCategoriesForm from '../../components/forms/admin/SubCategoriesForm';
import ProductTypeForm from '../../components/forms/admin/ProductTypeForm';

const AdminProductType = () => {
  const [currentDailougContent,setCurrentDailougContent] = useState(null);
  const [title,setTitle] = useState('Conformation');
  const [searchQuery,setSearchQuery] = useState('');

  const allSubCategories = ['mens','womens','girls']


  let productTypes = [
    {
      id:"sfhksf9s7fsw7h34j3",
      type:"phant",
      subCategory:'Bottom wear',
      category:'mens'
    },
    {
      id:"4234234fdssfsd",
      type:"under wear",
      subCategory:'Bottom wear',
      category:'womens'
    },
    {
      id:"sdf423423432423432423ssddddddddddddddddddddddddsdddddddddddddddddddddddddddddddddfsd",
      type:"shirt",
      subCategory:'top wear',
      category:'mens'
    }
  ]
 
  const handleClick = (item,isEdit)=>{
    setTitle(isEdit?'Edit Product type' :'Confrim Deletion' )
    setCurrentDailougContent(
      isEdit?
      <SubCategoriesForm
        handleClick = {handleEdit}
        value={item}
        allCategories={allSubCategories}
      />:
      <ConfrimContent
        handleClick={handleDelete}
        content={`Are you sure would you like to delete ${item?.type} type ?`}
        label="Delete"
        bgColor={'red'}
        id={item?.id}
      />
    );
  }

  const handleDelete = (isDelete)=>{
    setCurrentDailougContent(null);

    if( !isDelete ) return;
    console.log(isDelete)
  }

  const handleEdit = (id,name)=>{
    setTitle('Edit Product type')
    
  }

  const handleCreate = ()=>{
    setTitle('Create New Product Type');
    setCurrentDailougContent(<ProductTypeForm allSubCategories={allSubCategories} handleClick={handleNewCategory}/>)
  }

  const handleNewCategory = ()=>{

  }
  const handleSearch = ()=>{
  }
  
  return (
    <AdminLayout
      dailogTitle={title}
      currentDailougContent={currentDailougContent}
      setCurrentDailougContent={setCurrentDailougContent}
      page={'product type'}
      handleCreate={handleCreate}
      handleSearch={handleSearch}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <table>
        <thead>
          <tr>
            <td>SNO</td>
            <td>Category</td>
            <td>Sub Category</td>
            <td>Type</td>
            <td className='table-actions'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            productTypes?.map((item,index)=><SingleCategoryItem key={item?.id} item={item} id={index} handleClick={handleClick}/>)
          }
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default AdminProductType