import React, { useEffect, useState } from 'react'
import { useCart } from '../context/cart'
import Dailog from './layouts/Dailog';
import toast from 'react-hot-toast';
import SingleCartItem from './templates/SingleCartItem';

const CartItems = ({items}) => {
  const [cart,setCart] = useCart();
  const [dailogContent,setDailogContent] = useState(null);

  const removeCartItem = (index)=>{
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    toast.success("Product Removed successfully")
  }

  const handleChange = async(type,index)=>{
    // type 0 for size and 1 for quntity
    let options = [];
    let value = null;
    if(type){
      options = [1,2,3,5,6];  //get data from api
      value = cart[index]?.quntity;
    }else{
      options = ['s','m','l','xl','xxl'];
      value = cart[index]?.size;
    }
    if(!options || !value){
      toast.error("Something went wrong")
      return;
    }
    OptionsContiner({
      options,
      value,
      setDailogContent,
      handleClick
    })

  }

  const handleClick = ()=>{

  }

  useEffect(()=>{

  },[])

  return (
    <>
      <Dailog dailogContent={dailogContent} setDailogContent={setDailogContent}>
        <OptionsContiner options={dailogContent?.options} setDailogContent={setDailogContent} value={dailogContent?.value} setValue={dailogContent?.setValue} />
      </Dailog>
      <h3>My Cart</h3>
      <div className="line"></div>
      {
        cart?.length<1?<div className="center">
            <h3>No Items Found In Cart</h3>
            <button className='btn btn-primary'>Shop Now</button>
        </div>:(
          <div className="product-card cart-item" style={{border:'none',borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
            {
              cart?.map((item,index)=>(
                <SingleCartItem
                  index={index}
                  item={item}
                  removeCartItem={removeCartItem}
                  handleChange={handleChange}
                  key={index}
                  />
                ))
            }
          </div>
        )
      }
    </>
  )
}


const OptionsContiner = ({options,value,handleClick}) =>{
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