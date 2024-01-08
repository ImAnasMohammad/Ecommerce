import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Banner = ({url,img}) => {
    const [src,setSrc] = useState(0);
    useEffect(()=>{
        const newImg = new Image();
        newImg.src = img;

        newImg.onload = ()=>{
            setSrc(img);
        }

        newImg.onerror = ()=>{
            setSrc(1);
            console.log("first")
        }
    },[src])
  return (
    <Link className='banner-a' to={url}>
        { src===0 && <div><div className="loader"></div></div>}
        { src===1 && <div>Unable to Load image</div> }
        { src!==1 && src !==0 && <img src={img} alt={img} style={{maxWidth:'1000px'}} /> }
    </Link>
  )
}

export default Banner