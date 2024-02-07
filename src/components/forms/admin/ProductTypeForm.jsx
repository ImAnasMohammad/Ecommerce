import React, { useState } from 'react'
import {Select} from 'antd'

const {Option} =  Select;

const ProductTypeForm = ({allSubCategories,value,callBack}) => {

    const [type,setType] = useState(value?.type);
    const [subCategory,setSubCategory] = useState(value?.subCategory);

    const handleClick = ()=>{

    }
    return (

        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <div className='search-wrapper' style={{width:'100%'}}>
              <input
                type="text"
                className='search-input'
                placeholder={!type && 'Type'}
                value={type}
                style={{maxWidth:'100%'}}
                onChange={e=>setType(e.target.value)}
              />
            </div>
    
            <Select value={subCategory} style={{width:'100%',fontSize:'20px'}} onChange={value=>setSubCategory(value)} bordered={false} placeholder="Select Category">
              {
                allSubCategories?.map(item=><Option value={item} key={item}>{item}</Option>)
              }
            </Select>
            {
              console.log(type)
            }
            <button onClick={handleClick} className="btn btn-primary search-btn" style={{float:'left',width:'fit-content'}}> {value?'Edit':'Create'}</button>
        </div>
      )
}

export default ProductTypeForm