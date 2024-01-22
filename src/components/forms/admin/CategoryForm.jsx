import React, { useState } from 'react'

const CategoryForm = ({handleClick,value}) => {
  const [category,setCategory] = useState(value?.category ?? null);

  
  return (
    <div className="search-main-wrapper-admin">
      <div className='search-wrapper'>
        <input
          type="text"
          style={{maxWidth:'280px'}}
          className='search-input'
          placeholder={!category && 'Create New Category'}
          value={category}
          onChange={e=>setCategory(e.target.value)}
        />
      </div>
      <button onClick={()=>handleClick(category,value?.id)} className="btn btn-primary search-btn"> {value?'Edit':'Create'}</button>
    </div>
  )
}

export default CategoryForm