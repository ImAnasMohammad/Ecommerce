import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import img from '../../img/p1.webp'
import formatCurrency from '../../ReusableFunctions/formatCurrency';
const SingleCartItem = ({item,index,removeCartItem,handleChange}) => {
    const [price,setPrice] = useState('');
    const [discountPrice,setDiscountPrice] = useState('');

    useEffect(()=>{
        let price = item?.price;
        let discountPrice = 0;
        if(item?.discount){
            discountPrice = item?.price - ((item?.price*item?.discount)/100);
        }
        price = formatCurrency(price);
        discountPrice = formatCurrency(discountPrice);
        setPrice(price);
        setDiscountPrice(discountPrice);

    },[item])
  return (
    <div>
        <div className='img-wrapper'>
            <img src={img} alt="Product" />
        </div>
        <div className="product-details">
            <p className="product-name">{item?.name}</p>
            <p>
                {
                    !item?.discount ?<span className="product-current-price">{price}</span>:<>
                        <span className="product-current-price">{discountPrice}</span>
                        <del className="product-actual-price">Rs {price}</del>
                        <span className="product-discount">{item?.discount}%</span>
                    </>
                }
            </p>
            <div className="size-quntity">
            <div className="size" onClick={()=>handleChange(0,index)}> {/* Here 0 for size*/}
                <span className='select-size'>Select Size</span>
                <button className="select-btn">{item?.size}</button>
            </div>
            <div className="size" onClick={()=>handleChange(1,index)}> {/* Here 1 for size*/}
                <span className='select-size'>Select Quntity</span>
                <button className="select-btn">{item?.quntity}</button>
            </div>
            </div>
        </div>
        <div className="remove-item-cart">
            <abbr title="Remove item" onClick={()=>removeCartItem(index)}><IoMdClose /></abbr>
        </div>
    </div>
  )
}

export default SingleCartItem