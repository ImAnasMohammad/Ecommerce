import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";

const SingleCategoryItem = ({id,item,handleClick}) => {
  return (
    <tr>
        <td className='table-max-td'><abbr title={item?.id}>{id+1}</abbr></td>
        {
            item?.category && <td className='table-max-td'><abbr title={item?.category}>{item?.category}</abbr></td>
        }
        {
            item?.subCategory && <td className='table-max-td'><abbr title={item?.subCategory}>{item?.subCategory}</abbr></td>
        }
        
        <td className='table-actions'>
            <button onClick={()=>handleClick(item,true)}className='edit'><abbr title="Edit"><MdModeEditOutline/></abbr></button>
            <button onClick={()=>handleClick(item,false)}className='delete'><abbr title="Delete"><IoMdClose/></abbr></button>
        </td>
    </tr>
  )
}

export default SingleCategoryItem