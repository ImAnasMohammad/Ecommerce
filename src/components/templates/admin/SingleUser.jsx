import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Switch } from 'antd';

const SingleUser = ({user,handleClick}) => {
  return (
    <tr>
        <td className='table-max-td'><abbr title={user?.id}>{user?.id}</abbr></td>
        <td className='table-max-td'><abbr title={user?.name}>{user?.name}</abbr></td>
        <td className='table-max-td'><abbr title={user?.status ? "Block" : "Unblock"}><Switch size="small" value={user?.status} /></abbr></td>
        <td className='table-max-td'>
          {
            user?.verified?<abbr title="Verified user"><IoCheckmark className='success f-22'/></abbr>:<abbr title="Not Verified yet"><IoCloseOutline className='failed f-22'/></abbr>
          }
        </td>
        <td className='table-actions'>
            <button onClick={()=>handleClick(user,false)}className='delete'><abbr title="Delete this user information" style={{fontSize:'16px'}}>Delete</abbr></button>
        </td>
    </tr>
  )
}

export default SingleUser