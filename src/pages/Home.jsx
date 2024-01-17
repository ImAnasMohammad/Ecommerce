import React, { useEffect } from 'react'
import Layout from '../components/layouts/Layout';
import Slides from '../components/layouts/Slides';
import { ImportantProducts } from '../components/ImportantProducts';
import { useLoading } from '../context/loading';
import Banner from '../components/layouts/Banner';

const Home = () => {
  const [loading,setLoading] = useLoading(0);
  
  useEffect(()=>{
    setTimeout(()=>setLoading(0),1)
  })
let obj = [
    {
      url:"/product/slkfjslfjsf",
      name:'printer',
      price:1000,
      discount:10,
      img:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70'
    },
    {
      url:"/product/slkfjslfjsf",
      name:'printer',
      price:1000,
      discount:10,
      img:'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/x/d/6/8-mrj2188-8-aadi-black-original-imagshygfnbxggzq.jpeg?q=70'
    },
    {
      url:"/product/slkfjslfjsf",
      name:'printer',
      price:1000,
      discount:10,
      img:'https://rukminim2.flixcart.com/image/612/612/l3dcl8w0/shoe/h/m/1/11-sports-125-tpent-black-original-imagegdgd48vqcz9.jpeg?q=70'
    },
    {
      url:"/product/slkfjslfjsf",
      name:'printer',
      price:1000,
      discount:10,
      img:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70'
    }
]
  return (
    <Layout title="Ecommerce - fashon" mainClass="home">
        <Slides/>
        <div style={{backgroundColor:'var(--textColor)'}}>
          <div className="max-1000" style={{paddingTop:'20px',paddingBottom:'20px'}}>
            <ImportantProducts title="New Collections" data={obj}/>
            <Banner url={'sdf'} img='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b6d0f4b7a5e55fbc.jpg?q=20'/>
            <ImportantProducts title="best seller" data={obj}/>
          </div>
        </div>
    </Layout>
  )
}

export default Home