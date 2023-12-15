import React, { useEffect, useRef, useState } from 'react';
import f9 from '../img/f9.jpg';
import f8 from '../img/f8.jpg';
import f7 from '../img/f7.jpg';
import f6 from '../img/f6.jpg';
import { Link } from 'react-router-dom';
const Slides = () => {
    let obj = [f6,f7,f8,f9]
    const [active,setActive] = useState(0);
    const slideImg = (move)=>{
        let temp = active+move;
        if(temp<0){
            temp=obj.length-1;
        }
        if(temp>=obj.length){
            temp=0;
        }
        setActive(temp);
    }
  return (
        <div className="slides">
            {
                obj?.map((data,i)=>(
                    <Link key={i} to="" className={active===i?'active':''}>
                        <img src={data} alt="img" />
                    </Link>
                ))
            }
            <div className="slide-info-wrapper">
                {
                    obj?.map((e,i)=>(<div className={`${active===i?'active':''}`} key={i}/>))
                }
            </div>
            <span onClick={()=>slideImg(-1)}>&lt;</span>
            <span onClick={()=>slideImg(1)}className="slide-right-btn">&gt;</span>
        </div>
  )
}

export default Slides