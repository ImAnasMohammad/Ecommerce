import React, { Children, useRef } from 'react';
import { IoMdClose } from "react-icons/io";

const Dailog = ({dailogContent,setDailogContent,children}) => {
  const handleClick = (e) =>{
    e.stopPropagation();
  }
  return dailogContent?(<div className="popup-model" onClick={()=>setDailogContent(null)}>
      <div className="popup-wrapper" onClick={(e)=>handleClick(e)}>
        <header><h3>{dailogContent?.title}</h3><button onClick={()=>setDailogContent(null)}><IoMdClose /></button></header>
        <div className="dailog-content">
          {
            children
          }
          {
            document.body.classList.add('overFlowhidden')
          }
        </div>
      </div>
    </div>
  ):<>{document.body.classList.remove('overFlowhidden')}</>
}

export default Dailog