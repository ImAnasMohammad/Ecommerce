import React, { useEffect, useReducer, useState } from 'react'
import ProfileLayout from '../components/layouts/ProfileLayout'
import PersonalInformationForm from '../components/forms/PersonalInformationForm'
import user1 from '../components/dummyData/user.json'
import { InitialInformation,userPersonalInformationReducer } from '../components/reducers/UserPersonalInformationReducer'
import { profileValidation } from '../validations/formValidations'

const ManageProfile = () => {
  const [user,userDispatch] = useReducer(userPersonalInformationReducer,InitialInformation);
  const [err,setErr] = useState(0);
  const [isDisable,setIsDisable] = useState(true);
  const [tempData,setTempData] = useState(user);

  function checkData(){
    const keys = Object.keys(user);
    
    for(let key of keys ){

      console.log(tempData[key],user[key],key)
      if (tempData[key] !== user[key]) {
        return true;
      }
    }
    return false;
  }

  useEffect(()=>{
    userDispatch({type:'SET_ALL',payload:user1});
    setTempData(user1);
  },[])

  useEffect(()=>{
    let s = checkData(user,tempData);
    console.log(s)
    setIsDisable(s)
  },[user])

  const handleClick = (e)=>{
    e.preventDefault();
    let error = profileValidation(user);

    if( error ) {
      setErr(error);
      return;
    }
    console.log(user)

    
  }
  const handleChange = (type,name,value)=>{
    userDispatch({type,payload:{name,value}});
  }

  return (
    <ProfileLayout>
      <div className="profile-info-wrapper">
        <h2>Profile</h2>
        <PersonalInformationForm user={user} isDisable={isDisable} handleClick={handleClick} err={err} handleChange={handleChange}/>
      </div>
    </ProfileLayout>
  )
}

export default ManageProfile