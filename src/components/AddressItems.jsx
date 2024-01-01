import React, { useEffect, useState } from 'react'
import Dailog from './layouts/Dailog'
import AddressForm from './forms/AddressForm';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import toast from 'react-hot-toast';
import SingleAddressItem from './templates/SingleAddressItem';
import fetchedAddress from './dummyData/address.json'

const addresDetails = {
    name      :'',
    phone     :'',
    address   :'',
    district  :'',
    state     :'',
    pinCode   :'',
    type      :0,
    isDefault :0 ,
    _id:''
}

const AddressItems = ({setStage}) => {
    const [dailogContent,setDailogContent] = useState(null);
    const [addressList,setAddressList] = useState(null);
    const [selectAddress,setSelectAddress] = useState(null);
    const [editAddressIndex,setEditAddressIndex] = useState(-1);

    const handleClick = ()=>{
        console.log('first')
    }

    const removeAddress = (e,index) =>{
        e.stopPropagation();
        if(index === null){
            toast.error("Something went wrong");
            return;
        }
        let newList =[...addressList];
        newList?.splice(index,1);
        setAddressList(newList);
        toast.success("Address Removed")
    }
    
    const editAddress = (e,index) =>{
        e.stopPropagation();
        if(index === null){
            toast.error("Something went wrong");
            return;
        }
        setEditAddressIndex(index)
        setDailogContent({
            title:'Update Address'
        })


    }
    const handleNewAddressClick = ()=>{
        setEditAddressIndex(-1);
        setDailogContent({title:"Add New Address"})
    }

    useEffect(()=>{
        setAddressList(fetchedAddress);
    },[])
  return (
    <>
        <Dailog dailogContent={dailogContent} setDailogContent={setDailogContent} >
            <AddressForm addressDataType={addresDetails} editAddressIndex={editAddressIndex} setEditAddressIndex={setEditAddressIndex} addressList={addressList} setAddressList={setAddressList} handleClick={handleClick}/>
        </Dailog>
        {setStage&&<h4 className="go-to-back" onClick={()=>setStage(prev=>prev-1)}><FaArrowLeftLong/> Go Back</h4>}
        <div className="select-address-wrapper">
            <h3>{setStage&&'Select'}Shipping Address <button className='btn btn-secondry' onClick={handleNewAddressClick}><IoAdd /> Add New Address</button></h3>
            <div className="address-list-wrapper">
                {
                    addressList?.length>0?addressList?.map((item,index)=>(
                        <SingleAddressItem setStage={setStage} key={index} item={item} index={index} removeAddress={removeAddress} editAddress={editAddress} selectAddress={selectAddress} setSelectAddress={setSelectAddress}/>
                    )):<div className='center'>
                        <button className='btn btn-primary' style={{fontSize:'18px'}}onClick={handleNewAddressClick}><IoAdd /> Add New Address</button>
                    </div>
                }
            </div>
        </div>
    
    </>
  )
}

export default AddressItems