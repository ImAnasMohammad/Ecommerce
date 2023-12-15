import React from 'react';
import Products from '../components/Products';
import img from '../img/f6.jpg'
import Layout from '../components/layouts/Layout';
const Product = () => {
  return (
    <Layout title="Single product">
        <Products img={img} />
    </Layout>
  )
}
export default Product