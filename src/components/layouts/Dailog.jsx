import React, { useEffect, useRef } from 'react';
import { IoMdClose } from "react-icons/io";

const Dailog = ({dailogContent,setDailogContent,children,dailogClose,title}) => {
  const ref = useRef();
  const handleClick = (e) =>{
    e.stopPropagation();
  }
  const closeDailouge = (e)=>{
    
    e.preventDefault();
    if(dailogClose) dailogClose();
    setDailogContent(null);
  }
  useEffect(()=>{
    document.body.classList.toggle('overFlowhidden',dailogContent);
  },[dailogContent])

  return dailogContent&&(<div className="popup-model" onClick={closeDailouge}>
      <div className="popup-wrapper" ref={ref} onClick={handleClick}>
        <header><h3>{title ?? dailogContent?.title ?? "Confrimation"}</h3><button onClick={closeDailouge}><IoMdClose /></button></header>
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




