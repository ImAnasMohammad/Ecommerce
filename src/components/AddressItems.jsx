import React, { useEffect, useState } from 'react'
import Dailog from './layouts/Dailog'
import AddressForm from './forms/AddressForm';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import toast from 'react-hot-toast';


const AddressItems = ({setStage}) => {
    const [dailogContent,setDailogContent] = useState(null);
    const [addressList,setAddressList] = useState(null);
    const [selectAddress,setSelectAddress] = useState(null);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState();
    const [pincode,setPincode] = useState();
    const [address,setAddress] = useState('');
    const [district,setDistrict] = useState('');
    const [state,setState] = useState('');
    const [type,setType] = useState('');
    
    const fetchedAddress = [
        {
            _id:"fsfdsfsdfsdfsff5s4f6s7f8sd4f",
            name:"Shaik user",
            phone:1234567890,
            pincode:789456,
            address:"Ramireddy padu main road",
            district:"guntur",
            state:"Andhra pradesh",
            type:"Home"
        },
        {
            _id:"fsfdsfsdfsdfsff5s4f6s7f8sssd4f",
            name:"Shaik slkfsdfkjlsdjfsdkjflsdkfjsdkfsldfklsdkfsdf",
            phone:1234567890,
            pincode:324244432423423243242498474375384,
            address:"Ramireddy padu main road",
            district:"guntur",
            state:"Andhra pradesh",
            type:"Home"
        },
        {
            _id:"fsfdsfsdfsdfsff5es4f6sdsf7f8sd4f",
            name:"Shaik user",
            phone:1234567890,
            pincode:789456,
            address:"Ramireddy padu main rsfsdfsdfsdfsdddddddddddddddddddddddddddddddddoad",
            district:"guntur",
            state:"Andhra pradesh",
            type:"Home"
        },
        {
            _id:"fsfdsfsdfsdfsfwf5s4f6ssdf7f8sd4f",
            name:"Shaik user",
            phone:1234567890,
            pincode:789456,
            address:"Ramireddy padu main rdsfssdfsfssdoad",
            district:"guntur",
            state:"Andhra pssfdfsdfsdfsdfsfsfsfsdsfsdfsdfsfdsfsradesh",
            type:"Home"
        },
        {
            _id:"fsfdsfsdfsdfsff5s4f6s7rewrf8sdfsfd4f",
            name:"Shaik user",
            phone:1234567333333333333333333333333333333333333333890,
            pincode:789456,
            address:"Ramireddy padu main road",
            district:"guntur",
            state:"Andhra pradesh",
            type:"Home"
        }
    ];

    const searchAddress = (id) =>{
        for(let i=0;i<addressList?.length;i++){
            if(addressList[i]?._id === id) return i;
        }
        return null;
    }
    const removeAddress = (e,id) =>{
        e.stopPropagation();
        let index = searchAddress(id);
        if(index === null){
            toast.error("Something went wrong");
            return;
        }
        let newList =[...addressList];
        newList?.splice(index,1);
        setAddressList(newList)
        toast.success("Address Removed")
    }
    
    const editAddress = (e,id) =>{
        e.stopPropagation();
        let i = searchAddress(id);
        if(i === null){
            toast.error("Something went wrong");
            return;
        }
        
        setName(addressList[i]?.name);
        setPhone(addressList[i]?.phone);
        setAddress(addressList[i]?.address);
        setPincode(addressList[i]?.pincode);
        setDistrict(addressList[i]?.district);
        setState(addressList[i]?.state);
        setType(addressList[i]?.type);
        setDailogContent({
            title:'Update Address'
        })


    }

    useEffect(()=>{
        setAddressList(fetchedAddress);
    },[])
  return (
    <>
        <Dailog dailogContent={dailogContent} setDailogContent={setDailogContent}>
            <AddressForm/>
        </Dailog>
        <h4 className="go-to-back" onClick={()=>setStage(prev=>prev-1)}><FaArrowLeftLong/> Go Back</h4>
        <div className="select-address-wrapper">
            <h3>Select Shipping Address <button className='btn btn-secondry' onClick={()=>setDailogContent({title:"Add New Address"})}><IoAdd /> Add New Address</button></h3>
            <div className="address-list-wrapper">
                {
                    addressList?.length>0?addressList?.map(item=>(
                        <div className="address-single-wrapper" key={item?._id} onClick={()=>setSelectAddress(item?._id)}>
                            <div className={`radio-btn ${item?._id===selectAddress?'active':''}`}></div>
                            <div className='address-wrapper'>
                                <div className='bold'>{item?.name}<span className='highlite'>{item?.type}</span></div>
                                <div>{item?.address}</div>
                                <div>{item?.district}, {item?.state} - <span className='bold'>{item?.pincode}</span></div>
                                <div className='bold'>{item?.phone}</div>
                            </div>
                            <div className="remove-edit-btns">
                                <button className='btn btn-secondry'onClick={(e)=>removeAddress(e,item?._id)}>Remove</button>
                                <button className='btn btn-secondry'onClick={(e)=>editAddress(e,item?._id)}>Edit</button>
                            </div>
                        </div>
                    )):<div className='center'>
                        <button className='btn btn-primary' style={{fontSize:'18px'}}onClick={()=>setDailogContent({title:"Add New Address"})}><IoAdd /> Add New Address</button>
                    </div>
                }
            </div>
        </div>
    
    </>
  )
}

export default AddressItems