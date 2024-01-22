import React, { useState } from 'react';
import {Select} from 'antd'

const {Option} =  Select;
const SubCategoriesForm = ({allCategories,value,callBack}) => {
  
  const [category,setCategory] = useState(value?.category);
  const [subCategory,setSubCategory] = useState(value?.subCategory);

  const handleClick = ()=>{

  }

  return (

    <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>

        <div className='search-wrapper' style={{width:'100%'}}>
          <input
            type="text"
            className='search-input'
            placeholder={!subCategory && 'Create New Category'}
            value={subCategory}
            style={{maxWidth:'100%'}}
            onChange={e=>setSubCategory(e.target.value)}
          />
        </div>

        <Select value={category} style={{width:'100%',fontSize:'20px'}} onChange={value=>setCategory(value)} bordered={false} placeholder="Select Category">
          {
            allCategories?.map(item=><Option value={item} key={item}>{item}</Option>)
          }
        </Select>
        <button onClick={handleClick} className="btn btn-primary search-btn" style={{float:'left',width:'fit-content'}}> {value?'Edit':'Create'}</button>
    {
      console.log(value)
    }
    </div>
  )
}

export default SubCategoriesForm