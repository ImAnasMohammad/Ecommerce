import React from 'react'
import CategoryProductCard from './CategoryProductCard'

export const ImportantProducts = ({data,title,className}) => {
  return (
        <div className="products-main-wrapper">
            <div>
                <div className="important-heading">
                    <h3>{title}</h3>
                    <div></div>
                </div>
                <div className="products-wrapper">
                    {
                        data?.map((item,index)=> <CategoryProductCard key={index} name={item.name} className={className} actualprice={item.price} discount={item.discount} img={item.img} url={item.url}/>)
                    }        
                </div>
            </div>
        </div>
  )
}
