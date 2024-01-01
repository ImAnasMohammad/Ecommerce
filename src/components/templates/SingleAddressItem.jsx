import React from 'react'

const SingleAddressItem = ({setStage,item,index,setSelectAddress,removeAddress,editAddress,selectAddress}) => {
  return (
    <>
        <div className={`address-single-wrapper ${!setStage?'defaultCursor':''}`} onClick={()=>setSelectAddress(index)}>
            <div className='address-max-width-wrapper'>
              {setStage&&<div className={`radio-btn ${index===selectAddress?'active':''}`}></div>}
              <div className='address-wrapper'>
                  <div className='bold'>{item?.name}<span className='highlite'>{item?.type?'Office':'Home'}</span></div>
                  <div>{item?.address}</div>
                  <div>{item?.district}, {item?.state} - <span className='bold'>{item?.pinCode}</span></div>
                  <div className='bold'>{item?.phone}</div>
              </div>
            </div>
            <div className={`remove-edit-btns ${index===selectAddress?'active':''}`}>
                <button className='btn btn-secondry'onClick={(e)=>removeAddress(e,index)}>Remove</button>
                <button className='btn btn-secondry'onClick={(e)=>editAddress(e,index)}>Edit</button>
            </div>
        </div>
    </>
  )
}

export default SingleAddressItem