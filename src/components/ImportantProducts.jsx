import React from 'react'
import CategoryProductCard from './CategoryProductCard'

export const ImportantProducts = ({data,title,className}) => {
  return (
        <div className="products-main-wrapper">
            <h3>{title}</h3>
            <div className="products-wrapper">
                {
                    data?.map(item=> <CategoryProductCard name={item.name} className={className} offer={item.offer} img={item.img} url={item.url}/>)
                }        
            </div>
        </div>
  )
}
