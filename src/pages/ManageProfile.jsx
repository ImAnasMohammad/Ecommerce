import React, { useEffect, useReducer, useState } from 'react'
import ProfileLayout from '../components/layouts/ProfileLayout'
import PersonalInformationForm from '../components/forms/PersonalInformationForm'
import user1 from '../components/dummyData/user.json'
import { InitialInformation,userPersonalInformationReducer } from '../components/reducers/UserPersonalInformationReducer'

const ManageProfile = () => {
  const [user,userDispatch] = useReducer(userPersonalInformationReducer,InitialInformation);
  const [err,setErr] = useState(0);
  // const [tempData,setTempData] = useState(user);

  useEffect(()=>{
    userDispatch({type:'SET_ALL',payload:user1});
    // setTempData(user1);
  },[])
  const handleClick = (e)=>{
    e.preventDefault();
    
  }
  const handleChange = (type,name,value)=>{
    userDispatch({type,payload:{name,value}});

  }
  return (
    <ProfileLayout>
      <div className="profile-info-wrapper">
        <h2>Profile</h2>
        <PersonalInformationForm user={user} handleClick={handleClick} err={err} handleChange={handleChange}/>
      </div>
    </ProfileLayout>
  )
}

export default ManageProfile