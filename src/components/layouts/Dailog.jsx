import React, { Children, useEffect, useRef } from 'react';
import { IoMdClose } from "react-icons/io";

const Dailog = ({dailogContent,setDailogContent,children,dailogClose}) => {
  const ref = useRef();
  const handleClick = (e) =>{
    e.stopPropagation();
  }
  const closeDailouge = ()=>{
    if(dailogClose) dailogClose();
    setDailogContent(null);
  }
  useEffect(()=>{
    document.body.classList.toggle('overFlowhidden',dailogContent);
    if(dailogContent){
      let y = window.scrollY;
      ref.current.style.top=`${y}px`;
      console.log(ref,y)
    }
  },[dailogContent])

  return dailogContent&&(<div className="popup-model" onClick={closeDailouge}>
      <div className="popup-wrapper" ref={ref} onClick={(e)=>handleClick(e)}>
        <header><h3>{dailogContent?.title}</h3><button onClick={closeDailouge}><IoMdClose /></button></header>
        <div className="dailog-content">
          {
            children
          }
        </div>
      </div>
    </div>
  )
}

export default Dailog