import React from 'react'

const ConfrimContent = ({content,label,bgColor,handleClick,id}) => {
  return (
    <div className='confrim-main-wrapper'>
        <div>{content}</div>
        <div className='confrim-wrapper'>
            <button className='cancle-btn' onClick={()=>handleClick(false)}>Cancle</button>
            <button className='confrim-btn' onClick={()=>handleClick(id)} style={{backgroundColor:bgColor}}>{label}</button>
        </div>
    </div>
  )
}

export default ConfrimContent