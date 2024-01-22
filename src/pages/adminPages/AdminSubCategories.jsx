import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import SingleCategoryItem from '../../components/templates/admin/SingleCategoryItem';
import ConfrimContent from '../../components/layouts/ConfrimContent';
import SubCategoriesForm from '../../components/forms/admin/SubCategoriesForm';

const AdminSubCategories = () => {
  const [currentDailougContent,setCurrentDailougContent] = useState(null);
  const [title,setTitle] = useState('Conformation');
  const [searchQuery,setSearchQuery] = useState('');

  const allCategories = ['mens','womens','girls']


  let subCategories = [
    {
      id:"sfhksf9s7fsw7h34j3",
      category:"Mens",
      subCategory:'Bottom wear'
    },
    {
      id:"4234234fdssfsd",
      category:"womens",
      subCategory:'Bottom wear'
    },
    {
      id:"sdf423423432423432423ssddddddddddddddddddddddddsdddddddddddddddddddddddddddddddddfsd",
      category:"girdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffls",
      subCategory:'Bottom wear'
    }
  ]
 
  const handleClick = (item,isEdit)=>{
    setTitle(isEdit?'Edit Category' :'Confrim Deletion' )
    setCurrentDailougContent(
      isEdit?
      <SubCategoriesForm
        handleClick = {handleEdit}
        value={item}
        allCategories={allCategories}
      />:
      <ConfrimContent
        handleClick={handleDelete}
        content={`Are you sure would you like to delete ${item?.subCategory} sub-category ?`}
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
    setCurrentDailougContent(<SubCategoriesForm handleClick={handleNewCategory}/>)
  }

  const handleNewCategory = ()=>{

  }
  const handleSearch = ()=>{
  }
  
  return (
    <AdminLayout
      count={2333}
      dailogTitle={title}
      currentDailougContent={currentDailougContent}
      setCurrentDailougContent={setCurrentDailougContent}
      page={'Sub Categories'}
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
            <td className='table-actions'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            subCategories?.map((item,index)=><SingleCategoryItem key={item?.id} item={item} id={index} handleClick={handleClick}/>)
          }
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default AdminSubCategories