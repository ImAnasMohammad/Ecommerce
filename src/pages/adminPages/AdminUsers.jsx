import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import SingleUser from '../../components/templates/admin/SingleUser';
import ConfrimContent from '../../components/layouts/ConfrimContent';
import CategoryFrom from '../../components/forms/admin/CategoryForm';
import { useLoading } from '../../context/loading';

const AdminUsers = () => {
  const [currentDailougContent,setCurrentDailougContent] = useState(null);
  const [title,setTitle] = useState('Conformation');
  const [searchQuery,setSearchQuery] = useState('');
  const [loading,setLoading] = useLoading(2)



  let users = [
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:0
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:1
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:1
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:0
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:0
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:0
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:0
    },
    {
      id:"sfhksf9s7fsw7h34j3",
      name:"Mesdfsdns",
      status:0,
      verified:1
    },
    {
      id:"sfhksf9sdfsdfs7fsw7h34j3",
      name:"Mesdfs sfsddns",
      status:1,
      verified:0
    },
    {
      id:"sfsdf sdfs hksf9s7fsw7h34j3",
      name:"Mesdsfsdfsdffsdns",
      status:0,
      verified:0
    },
    
  ]
 
  useEffect(()=>{
    setTimeout(()=>setLoading(2),3000);
    setTimeout(()=>setLoading(0),6000);
  },[])


  const handleClick = (item)=>{
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

  const handleDelete = (isDelete)=>{
    setCurrentDailougContent(null);

    if( !isDelete ) return;
    console.log(isDelete)
  }

  const handleSearch = ()=>{

  }
  
  return (
    <AdminLayout dailogTitle={title} page={'users'} currentDailougContent={currentDailougContent} setCurrentDailougContent={setCurrentDailougContent} handleSearch={handleSearch} count={23038} searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Status</td>
            <td>Verified</td>
            <td className='table-actions'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((item)=><SingleUser key={item?.id} user={item} handleClick={handleClick}/>)
          }
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default AdminUsers