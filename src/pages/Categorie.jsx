import React from 'react'
import Layout from '../components/layouts/Layout'
import { ImportantProducts } from '../components/ImportantProducts'
import img from '../img/f6.jpg';
import { useParams } from 'react-router-dom';


const Categorie = () => {
  const params = useParams();
    let obj = [
        {
          url:"img",
          name:'printer',
          offer:'printer',
          img:img,
          slug:"sdfs"
        },
        {
          url:"img",
          name:'printer',
          offer:'printer',
        }
    ]
  return (
    <Layout title="Men's Categorie" >
        {
          console.log("first")
        }
        <ImportantProducts title="Men's topwear" data={obj}className="category"/>
        <ImportantProducts title="Men's bottomwear" data={obj} className="category"/>
        <ImportantProducts title="Men's footwear" data={obj} className="category"/>
    </Layout>
  )
}

export default Categorie