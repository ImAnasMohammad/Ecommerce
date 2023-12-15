import React from 'react'
import Layout from '../components/layouts/Layout';
import Slides from '../components/Slides';
import img from '../img/f7.jpg';
import { ImportantProducts } from '../components/ImportantProducts';

const Home = () => {
let obj = [
    {
      url:"/product/slkfjslfjsf",
      name:'printer',
      offer:'printer',
      img:img
    },
    {
      url:"/product/slkfjslfjsf",
      name:'printer',
      offer:'printer'
    }
]
  return (
    <Layout title="Ecommerce - fashon" mainClass="home">
        <Slides/>
        <ImportantProducts title="best seller" data={obj}/>
    </Layout>
  )
}

export default Home