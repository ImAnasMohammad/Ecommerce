import React from 'react';
import {Link} from 'react-router-dom'

const CategoryProductCard = ({url,img,name,offer,alt,className=null}) => {
  return (
    <Link to={url} className={`product-card ${img?'':'view-more'}`}>
        {
            img?(
                <>
                    <img src={img} className={className}alt={alt??"Image"} loading="lazy" />
                    <p className="name">{name}</p>
                    {offer?<p className="offer">{offer}</p>:''}
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
