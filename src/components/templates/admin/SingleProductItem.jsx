import React from 'react'
import { Link } from 'react-router-dom'

const SingleProductItem = ({product,handleChange}) => {
  return (
    <tr>
        <td className='table-max-td'><abbr title={product?.sku}><Link style={{color:'black'}} to={`/admin/add-product/${product?.sku}`}>{product?.sku}</Link></abbr></td>
        <td><img src={product?.img} style={{maxWidth:'70px'}} alt={product?.sku} /></td>
        <td className='table-max-td'><abbr title={product?.name}>{product?.name}</abbr></td>
        <td>{product?.date}</td>
        <td>
            <select className='select-admin-orders' value={product?.status} onChange={(e)=>handleChange(product?.id,e.target.value)}>
                <option value="0">Active</option>
                <option value="1">Deactive</option>
            </select>
        </td>
        <td>1200</td>
    </tr>
  )
}

export default SingleProductItem