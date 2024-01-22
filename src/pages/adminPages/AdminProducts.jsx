import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout'
import { useLoading } from '../../context/loading';
import ConfrimContent from '../../components/layouts/ConfrimContent';

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
      />
    );
  }

  const handleDelete = ()=>{
    
  }

  return (
    <AdminLayout
      page="Product"
      count={28874}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      handleSearch={handleSearch}
      setCurrentDailougContent={setCurrentDailougContent}
      handleCreate={handleCreate}
      currentDailougContent={currentDailougContent}
      dailogTitle={dailogTitle}
    >
        <div>AdminProducts</div>
    </AdminLayout>
  )
}

export default AdminProducts

