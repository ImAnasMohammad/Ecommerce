import React from 'react'
import Input from '../components/Input'

const PersonalInformationForm = ({user,err,handleClick,handleChange,isDisable}) => {
  return (
      <form className='profile-personal-info' action="" onSubmit={handleClick}>
        <div className="name-input">
          <Input name="fname" clas={`${err==="fname" &&'invalid'}`} required={true} type="text" label="First name" value={user?.fname} setValue={e=>handleChange("CHANGE_INPUT",e.target.name,e.target.value)}/>
          <Input name="lname" clas={`${err==="lname" &&'invalid'}`} required={true} type="text" label="Last name" value={user?.lname}  setValue={e=>handleChange("CHANGE_INPUT",e.target.name,e.target.value)}/>
        </div>
        <div className='personal-info-email-input'>
          <Input name="email" clas={`${err==="email" &&'invalid'}`} required={true} type="email" label="email" value={user?.email} setValue={e=>handleChange("CHANGE_INPUT",e.target.name,e.target.value)}/>
        </div>
        <div className='personal-info-phone-input'>
          <Input name="phone" clas={`${err==="phone" &&'invalid'}`} required={true} type="number" label="phone number" value={user?.phone} setValue={e=>handleChange("CHANGE_INPUT",e.target.name,e.target.value)}/>
        </div>
        <div className='personal-info-gender-input'>
          <div>Gender</div>
          <div className='verticle-center'>
            <label onClick={()=>handleChange("CHANGE_GENDER","gender",0)}>
              <div className={`radio-btn ${user?.gender===0?'active':''}`} />Male
            </label>
            <label onClick={()=>handleChange("CHANGE_GENDER","gender",1)}>
              <div className={`radio-btn ${user?.gender===1?'active':''}`} />Female
            </label>
          </div>
        </div>
        <button disabled={isDisable} type="submit" style={{maxWidth:'200px'}} className='btn btn-primary'>Save</button>
      </form>
  )
}

export default PersonalInformationForm