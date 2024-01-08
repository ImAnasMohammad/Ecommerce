import React, { useEffect } from 'react'

const Spinner = () => {
  useEffect(()=>{
    document.body.classList.add('overFlowhidden');
    // return document.body
  },[])
  return <div className="spinner-wrapper">
    <div className='whole-spinner loader'></div>
  </div>
}

export default Spinner