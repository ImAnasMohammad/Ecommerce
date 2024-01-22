import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import SingleCategoryItem from '../../components/templates/admin/SingleCategoryItem';
import ConfrimContent from '../../components/layouts/ConfrimContent';
import CategoryFrom from '../../components/forms/admin/CategoryForm';

const AdminCategories = () => {
  const [currentDailougContent,setCurrentDailougContent] = useState(null);
  const [title,setTitle] = useState('Conformation');
  const [searchQuery,setSearchQuery] = useState('');



  let categories = [
    {
      id:"sfhksf9s7fsw7h34j3",
      category:"Mens"
    },
    {
      id:"4234234fdssfsd",
      category:"womens"
    },
    {
      id:"sdf423423432423432423ssddddddddddddddddddddddddsdddddddddddddddddddddddddddddddddfsd",
      category:"girdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffls"
    }
  ]
 
  const handleCLick = (item,isEdit)=>{
    setTitle(isEdit?'Edit Category' :'Confrim Deletion' )
    console.log(item,isEdit)
    setCurrentDailougContent(
      isEdit?
      <CategoryFrom
        handleClick = {handleEdit}
        value={item}
      />:
      <ConfrimContent
        handleClick={handleDelete}
        content={`Are you sure would you like to delete ${item?.category} category ?`}
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
    setTitle('Edit Category')
    
  }

  const handleCreate = ()=>{
    setTitle('Create New Category');
    setCurrentDailougContent(<CategoryFrom handleClick={handleNewCategory}/>)
  }

  const handleNewCategory = ()=>{

  }

  const handleSearch = ()=>{

  }
  
  return (
    <AdminLayout dailogTitle={title} currentDailougContent={currentDailougContent} setCurrentDailougContent={setCurrentDailougContent} handleCreate={handleCreate} handleSearch={handleSearch}  page="Category">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Category</td>
            <td className='table-actions'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            categories?.map((item,index)=><SingleCategoryItem id={index} key={item?.id} item={item} handleClick={handleCLick}/>)
          }
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default AdminCategories