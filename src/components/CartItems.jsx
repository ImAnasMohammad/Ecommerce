import React, { useEffect, useState } from 'react'
import { useCart } from '../context/cart'
import Dailog from './layouts/Dailog';
import { IoMdClose } from "react-icons/io";
import toast from 'react-hot-toast';

const CartItems = ({items}) => {
  const [cart,setCart] = useCart();
  const [dailogContent,setDailogContent] = useState(null);
  const [size,setSize] = useState('s');
  const [quntity,setQuntity] = useState(1);
  return (
    <>
      <Dailog dailogContent={dailogContent} setDailogContent={setDailogContent}>
        <OptionsContiner options={dailogContent?.options} setDailogContent={setDailogContent} value={dailogContent?.value} setValue={dailogContent?.setValue} />
      </Dailog>
      <h3>My Cart</h3>
      <div className="line"></div>
      {
        items?.length<1?<div className="center">
            <h3>No Items Found In Cart</h3>
            <button className='btn btn-primary'>Shop Now</button>
        </div>:(
          <div className="product-card cart-item" style={{border:'none',borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
            {
              items?.map(item=>(
                <div>
                    <div className='img-wrapper'>
                      <img src={item?.img} alt="Product" />
                    </div>
                    <div className="product-details">
                        <p className="product-name">{item?.name}</p>
                        <p>
                            <span className="product-current-price">Rs {item?.variations?.discount?((item?.variations?.price*item?.variations?.discount)/100):item?.variations?.price}</span>
                            {
                                item?.variations?.discount?(
                                <>
                                    <del className="product-actual-price">Rs {item?.variations?.price}</del>
                                    <span className="product-discount">{item?.variations?.discount}%</span>
                                </>):''
                            }
                        </p>
                        <div className="size-quntity">
                          <div className="size" onClick={()=>setDailogContent({title:"Select Size",options:['s','m','l'],value:size,setValue:setSize})}>
                            <span className='select-size'>Select Size</span>
                            <button className="select-btn">{size}</button>
                          </div>
                          <div className="size" onClick={()=>setDailogContent({title:"Select Quntity",options:[1,2,3,4,5,6,7,8,9],value:quntity,setValue:setQuntity})}>
                            <span className='select-size'>Select Quntity</span>
                            <button className="select-btn">{quntity}</button>
                          </div>
                        </div>
                    </div>
                    <div className="remove-item-cart">
                      <abbr title="Remove item" onClick={()=>toast.success("Product successfully removed")}><IoMdClose /></abbr>
                    </div>
                </div>
              ))
            }
          </div>
        )
      }
    </>
  )
}


const OptionsContiner = ({options,value,setValue,setDailogContent}) =>{
  const handleClick = (i) =>{
    setValue(i);
    setDailogContent(false)
  }
  return(
    <div className="select-wrapper">
      {
        options.map((option)=>(
          <button className={`select-btn ${value===option?'active':''}`} onClick={()=>handleClick(option)}>{option}</button>
        ))
      }
    </div>
  )
}


export default CartItems