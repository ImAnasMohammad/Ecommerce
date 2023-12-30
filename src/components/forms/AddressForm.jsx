import React, { useEffect, useReducer, useState } from 'react'
import Input from '../components/Input';
import { addressFormValidation } from '../../validations/formValidations';
import toast from 'react-hot-toast';
import {InitialAddressState,addressReducer} from '../reducers/AddressReducer'



const AddressForm = ({handleClick,addressDataType,editAddressIndex,addressList,setAddressList}) => {
  const [err,setErr] = useState(0);
  const [isEdit,setIsEdit] = useState(false);
  const [addressState,addressDispatch] = useReducer(addressReducer,InitialAddressState);

  useEffect(()=>{
    if(editAddressIndex>-1 && editAddressIndex<addressList?.length){
      setIsEdit(true);
      addressDispatch({type:"CHANGE_ALL_ADDRESS",payload:addressList[editAddressIndex]});
    }else{
      // setAddress(addressDataType);
    }
  },[]);

  const handleSubmit =async(e)=>{
    e.preventDefault();
    let err = addressFormValidation(addressState);
    if(err){
      switch(err){
        case "name":setErr(1);
                    toast.error("Invalid Name")
                    break;
        case "phone":setErr(2);
                    toast.error("Invalid Phone")
                    break;
        case "address":setErr(3);
                    toast.error("Invalid Address")
                    break;
        case "district":setErr(4);
                    toast.error("Invalid District")
                    break;
        case "state":setErr(4);
                    toast.error("Invalid State")
                    break;
        case "pincode":setErr(4);
                    toast.error("Invalid Pincode")
                    break;
      }
      return;
    }
    const fetchedAddress = addressState;
    let newAddress = [...addressList];
    if(fetchedAddress?.isDefault){
      newAddress?.map(item=>item.isDefault=0);
    }
    if(isEdit){
      newAddress[editAddressIndex] = fetchedAddress;
      setAddressList([...newAddress]);
    }else{
      setAddressList([...addressList,fetchedAddress]);
    }
  }
  const handleChange = (e)=>{
    addressDispatch({type:"CHANGE_INPUT",payload:{name:e.target.name,value:e.target.value}});
  }
  return (
    <div className='address-form'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Input type="text"   cls={`${err===1 && ''}`} required={true} name ="name"     value={addressState?.name}       setValue={handleChange} label="name*" />
        <Input type="number" cls={`${err===2 && ''}`} required={true} name ="phone"    value={addressState?.phone}      setValue={handleChange} label="Mobile number*" />
        <Input type="text"   cls={`${err===3 && ''}`} required={true} name ="address"  value={addressState?.address}    setValue={handleChange} label="Address( house no, building no, landmark)*" />
        <Input type="text"   cls={`${err===4 && ''}`} required={true} name ="district" value={addressState?.district}   setValue={handleChange} label="district/city/town*" />
        <Input type="text"   cls={`${err===5 && ''}`} required={true} name ="state"    value={addressState?.state}      setValue={handleChange} label="state*" />
        <Input type="number" cls={`${err===6 && ''}`} required={true} name ="pinCode"  value={addressState?.pinCode}    setValue={handleChange} label="pinCode" />
        <div className='select-type'>
          <span onClick={()=>addressDispatch({type:"CHANGE_ADDRESS_TYPE",payload:0})} className={`highlite ${addressState?.type===0 && 'active'}`} >Home</span>
          <span onClick={()=>addressDispatch({type:"CHANGE_ADDRESS_TYPE",payload:1})} className={`highlite ${addressState?.type===1 && 'active'}`}>Office</span>
        </div>
        <label style={{userSelect:'none',display:'flex',alignItems:'center'}}>
            <input type="checkbox" checked={addressState?.isDefault} onChange={(e)=>addressDispatch({type:"CHANGE_DEFAULT_ADDRESS",payload:e.target.checked})} className='checkBox-hidden'/>
            <div className='customCheckBox'></div>
            Make Default Address
        </label>
        <button className='btn btn-primary' type='submit' style={{width:'100%'}}>Save</button>
      </form>
      {
        console.log(addressList)
      }
    </div>
  )
}

export default AddressForm




