import React from 'react'
import { Link } from 'react-router-dom'

const SingleOrderItem = ({order,handleChange}) => {
  return (
    <tr>
        <td><Link style={{color:'black'}} to={`admin/order/${order?.id}`}>{order?.id}</Link></td>
        <td><Link style={{color:'black'}} to={`admin/product/${order?.sku}`}>{order?.sku}</Link></td>
        <td>{order?.price}</td>
        <td>{order?.size}</td>
        <td>{order?.color}</td>
        <td>
            <select className='select-admin-orders' value={order?.status} onChange={(e)=>handleChange(order?.id,e.target.value)}>
                <option value="0">Recived</option>
                <option value="1">ready to ship</option>
                <option value="2">shipped</option>
            </select>
        </td>
    </tr>
  )
}

export default SingleOrderItem