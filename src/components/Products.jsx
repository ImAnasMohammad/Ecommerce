import React, {useState } from 'react'
import {Link} from 'react-router-dom';
import Filter from './Filter';

const Products = ({img}) => {
    const [seletedFilters,setSeletedFilters] = useState([{name:'sdfs'}]);
    let filters = [
        {
            name:"Gender",
            options:['male','female','kids','boys','girls']
        },
        {
            name:"Color",
            options:['red','Blue','green','pink','orange']
        },
        {
            name:"size",
            options:['s','M','l','xl','xxl']
        }
    ];
    let products = [
        {
            name:"Product name",
            desc:"Product desc",
            price:1000,
            discount:10,
            imgUrl:img,
            slug:'sfsfsdf'
        }
    ];
  return (
        <div className="main-all-product-wrapper">
            <Filter filters={filters}/>
            <div className="all-sort-products-wrapper">
                <div className="sort-wrapper">
                    <h4>{products?.length} Products Found</h4>
                    <div>
                        <span>SORT BY </span>
                        <select>
                            <option value>Low Price</option>
                            <option value>High Price</option>
                            <option value>Popular</option>
                            <option value>New Products</option>
                        </select>
                    </div>
                </div>
                <div className="products-wrapper">
                    {
                        products?.map(product=>(
                        <Link to={`/product/${product?.slug}`} className="product-card">
                            <img src={product?.imgUrl} alt="Image" loading="lazy" />
                            <p className="product-name">{product?.name}</p>
                            <p className="product-desc">{product?.desc}</p>
                            <p>
                                <span className="product-current-price">Rs {product.discount>0?(product?.price*product?.discount)/100:product?.price}</span>
                                {
                                    product.discount>0?(
                                        <>
                                            <del className="product-actual-price">Rs {product?.price}</del>
                                            <span className="product-discount">{product?.discount}%</span>
                                        </>):''
                                }
                            </p>
                        </Link>
                        ))
                    }
                </div>
            </div>
        </div>

  )
}

export default Products