import React, { useState } from 'react'
import ProductSubVariationForm from './ProductSubVariationForm';
import { IoMdAdd } from "react-icons/io";

const ProductVariationsForm = ({id,setStage,setLoading}) => {

  const [variations,setVariations] = useState([]);



  const initialValues = {
    size:'sdfsdf',
    color:'sdfsd',
    price:'',
    quntity:'',
    discount:''
  }

  const addVariations = ()=>{
    setVariations([...variations,initialValues]);
  }


  return (
    <div className='variations-from-wrapper'>
      <div className="button-wrapper" style={{padding:'20px 0px'}}>
        <h2>Add Variations</h2>
        <button className='btn btn-primary' onClick={addVariations}><IoMdAdd/> Add Varient</button>
      </div>
      {
        variations?.map((item,index)=><ProductSubVariationForm key={index} item={item} variations={variations} setVariations={setVariations} index={index} />)
      }
      <div className="button-wrapper">
          <button onClick={()=>setStage(0)} className="btn btn-secondry">Back</button>
          <button disabled={!variations?.length} className="btn btn-primary">Next</button>
      </div>
    </div>
  )
}

export default ProductVariationsForm