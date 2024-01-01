import React, { useState } from 'react'
import Layout from '../components/layouts/Layout';
import { FaShoppingCart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import CartItems from '../components/CartItems';
import PriceDetails from '../components/layouts/PriceDetails';
import AddressItems from '../components/AddressItems';
import img from '../img/p1.webp'
const Cart = () => {
  const [routeStage,setRouteStage] = useState(0);


  const fetchData = [{
    name:"product",
    img:img,
    variations:[{
        size:'s',
        quntity:100,
        price:80,
        discount:10,
      },{
        size:'m',
        quntity:0,
        price:1000,
        discount:10,
      },{
        size:'m',
        quntity:2,
        price:980,
        discount:10,
      }
    ]
  },{
    name:"product2",
    img:img,
    variations:[{
        size:'s',
        quntity:100,
        price:80,
        discount:10,
      },{
        size:'m',
        quntity:0,
        price:1000,
        discount:10,
      },{
        size:'m',
        quntity:2,
        price:980,
        discount:10,
      }
    ]
  }];
  const components = [
    <CartItems items={fetchData}/>,
    <AddressItems setStage={setRouteStage}/>
  ]
  return (
    <Layout title="My Cart">
      <div className="route-order-wrapper">
        <span className='visual-route'></span>
        <span className={`complete ${routeStage===1?'w-33':routeStage===2?'w-66':routeStage>=3?'w-100':''}`} ></span>
        <div>
          <abbr title="Cart">
            <div className={`${routeStage>0?'completed':routeStage===0?'active':''}`}>
              <FaShoppingCart />
            </div>
          </abbr>
          <abbr title="Details">
            <div className={`${routeStage>1?'completed':routeStage===1?'active':''}`}>
                <FaAddressCard />
            </div>
          </abbr>
          <abbr title="Payment">
            <div className={`${routeStage>2?'completed':routeStage===2?'active':''}`}>
                <MdOutlinePayment />
            </div>
          </abbr>
          <abbr title="Completed">
            <div className={`${routeStage>3?'completed':routeStage===3?'active':''}`}>
              <FaSmile />
            </div>
          </abbr>
        </div>
      </div>
      <div className="main-content-wrapper">
        <div className="address-payment-cart-wrapper">
          {components[routeStage]}
        </div>
        {
          routeStage<3 && <PriceDetails stage={routeStage} setStage={setRouteStage}/>
        }
        
      </div>
    </Layout>
  )
}

export default Cart