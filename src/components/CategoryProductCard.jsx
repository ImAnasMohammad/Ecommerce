import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import formatCurrency from '../ReusableFunctions/formatCurrency';

const CategoryProductCard = ({url,img,name,alt,className=null,actualprice,discount=0}) => {
    const [src,setSrc] = useState(0);

    useEffect(()=>{
        const newImg = new Image();
        newImg.src = img;
        console.log(img)
        newImg.onload = ()=>{
            setSrc(img);
        }
        newImg.onerror = ()=>{
            setSrc(1);
        }
    },[src])

  return (
    <Link to={url} className={`product-card ${img?'':'view-more'}`}>
        {
            img?(
                <>
                    
                    {
                        src ===0 && <div><div className="loader"></div></div>   
                    }
                    {
                        src ===1 && <div>Image Not Found</div>   
                    }
                    {
                        src!==0 && src!==1 && <img src={src} className={className}alt={alt??"Image"} loading="lazy" />
                    }
                    <p className="name">{name}</p>
                    <p className="price">
                        {
                            formatCurrency(discount?actualprice*(discount/100):actualprice)
                        }

                        {
                            discount&&<del>{actualprice}</del>
                        }
                    </p>
                </>
            ):(
                <>
                    <p className="name">&#62;</p>
                    <p className="offer">view more</p>
                </>
            )
        }
    </Link>
  )
}

export default CategoryProductCard;
