import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout';
import { ImportantProducts } from '../components/ImportantProducts';
import {useCart} from '../context/cart'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useWishList } from '../context/wishlist';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import d from '../components/dummyData/product.json';
import img from '../img/f6.jpg'
import img1 from '../img/f7.jpg'
import img2 from '../img/p1.webp'
import img3 from '../img/p2.webp'

const SingleProduct = () => {
    const navigator = useNavigate();
    const [activeImg,setActiveImg] = useState(0);
    const [activeSize,setActiveSize] = useState(0);
    const [cart,setCart] = useCart();
    const [wishList,setWishList] = useWishList();
    const [avgRate,setAvgRate] = useState(0);
    const [product,setProduct] = useState(null);
    const [isInCart,setIsInCart] = useState(false);
    const [isInWishList,setIsInWishList] = useState(false);

    let FetchedProduct = {
        _id:"sfsfs8w4rjhwss93w4",
        name:"Men Regular Fit Striped Spread Collar Casual Shirt",
        desc:"Lorem ipsum, dolor sit amet consectetur bcaecat numquam provident esse eius minus voluptate expedita quis! Sapiente aperiam sint odit doloremque asperiores molestiae ullam exercitationem minima placeat accusantium facilis, fugiat sequi!",
        imges:[img,img1,img2,img3],
        list:[
           "Lorem ipsum dolor dfsdfsdfsdfsdsit amet consectetur adipisicing elit. Eligendi, sint?", 
           "Lorem ipsum dolor sit amet consfsdfsdfsdfsectetur adipisicing elit. Eligendi, sint?", 
           "Lorem ipsum dolorfsdfsdfsdfsfsdfs sit amet consectetur adipisicing elit. Eligendi, sint?", 
           "Lorem ipsum fsdfsdfdolor sit amet codfsdfsdfsdfsdfsdnsectetur adipisicing elit. Eligendi, sint?", 
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elsdfdfsfsdfsigendi, sint?" 
        ],
        sizes:['s','m','xl'],
        category:"mens",
        subCategory:"topwear",
        details:{"Material Type":"sdfsd","fabrice":"dfsfsfsdsd","fitting type":'dsfdsfsf','sleve type':'sdfsdfsdfsd'},
        price:1200,
        discount:25,
        rating:[
            {
                user:"user1",
                rate:2
            },
            {
                user:"user2",
                rate:3
            },
            {
                user:"user3",
                rate:5
            },
        ]
    }
    const searcProductInList = (items)=>{
        for(let i=0;i<items?.length;i++){
            if(items[i].id === product?._id && items[i].size===product?.sizes[activeSize]){
                return true;
            }
        }
        return;
    }
    const handleClick = (isItCart)=>{
        
        if(isInCart && isItCart){
            navigator('/cart');
            return;
        }

        if(isInWishList && !isItCart){
            navigator('/wishlilst');
            return;
        }
        if(!product?._id){
            toast.error("Invalid Product id");
            return;
        }
        let newItem = {
            id:product?._id,
            size:product?.sizes[activeSize]
        }
        
        if(isItCart){
            setCart([...cart,newItem]);
            setIsInCart(true);
        }else{
            setWishList([...wishList,newItem]);
            setIsInWishList(true);
        }
        toast.success(`Product added to ${isItCart?'cart':'wishlist'} successfully...`)
    }
    const getProduct = ()=>setProduct(FetchedProduct);

    useEffect(()=>{
        setIsInCart(searcProductInList(cart));
        setIsInWishList(searcProductInList(wishList));
    },[activeSize]);

    useEffect(()=>{
        getProduct();
        console.log(d)
    },[]);


    useEffect(()=>{
        setAvgRate((product?.rating?.reduce((acc,curr)=>acc+curr.rate,0)/product?.rating?.length)?.toFixed(1));
        setIsInCart(searcProductInList(cart));
        setIsInWishList(searcProductInList(wishList));
    },[product]);
  return (
    <Layout title="single product">
        <section className="single-product-wrapper">
            <div className="row">
                <div className="images">
                    <img src={product?.imges[activeImg]} alt='Main Product' loading='lazy' />
                    <div className="small-img-group">
                        {
                            product?.imges?.map((src,i)=>(
                                <div className={`small-img-wrapper ${activeImg===i?'active':''}`} key={src}>
                                    <img src={src} alt='Products list' onClick={()=>setActiveImg(i)} loading='lazy'/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="details product-card">
                    <div className="path">
                        <span>Home</span>
                        <span>{product?.category}</span>
                        <span>{product?.subCategory}</span>
                    </div>
                    <p className="product-name">{product?.name}</p>
                    <p>
                        <span className="product-current-price">Rs {product?.discount?((product?.price*product?.discount)/100):product?.price}</span>
                        {
                            product?.discount?(
                            <>
                                <del className="product-actual-price">Rs {product?.price}</del>
                                <span className="product-discount">{product?.discount}%</span>
                            </>):''
                        }
                        
                        <span className='rate-wrapper'>
                            <FaStar className='icon-rating'/>{avgRate}
                        </span>
                    </p>
                    <div className="select-wrapper">
                        <h4>Size </h4>
                        <div className='select-wrapper'>
                            {
                                product?.sizes.map((size,i)=>(
                                    <button className={`select-btn ${activeSize===i?'active':''}`} onClick={()=>setActiveSize(i)}>{size}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="cart-wistlist-wrapper">
                        <button className='btn btn-primary' onClick={()=>handleClick(true)}><FaShoppingCart className='add-cart-icon' />{!isInCart?'Add':'Go '} to CART</button>
                        <button className='btn btn-secondry' onClick={()=>handleClick(false)}><FaHeart className='add-wistlist-icon'/>{!isInWishList?'Add':'Go '} to WISHLIST</button>
                    </div>
                    <div className="product-details">
                        <h3>Product Details</h3>
                        <ul>
                            {
                                product?.list.map(item=>(
                                    <li>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="about-product">
                        <h3>About Product</h3>
                        <table className='details-table'>
                            {
                                (typeof product?.details === "object" && product?.details!==null)?Object.entries(product?.details).map(([k,v])=>(
                                    <tr>
                                        <td>{k}</td>
                                        <td>{v}</td>
                                    </tr>
                                )):''
                            }
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <ImportantProducts title="Related items" data={[]}/>
        <ImportantProducts title="suggested items" data={[]}/>
        <ImportantProducts title="featured items" data={[]}/>
    </Layout>
  )
}

export default SingleProduct