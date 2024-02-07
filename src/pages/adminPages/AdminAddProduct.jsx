import React, { useState } from 'react';
import ProductMetaDataForm from '../../components/forms/admin/ProductMetaDataForm';
import ProductVariationsForm from '../../components/forms/admin/ProductVariationsForm';

const AdminAddProduct = () => {
    const [isEdit,setIsEdit] = useState(false);
    const [stage,setStage] = useState(1);
    const [loading,setLoading] = useState(null);

    const handleBackClick = ()=>{

    }

    const productForms = [
        <ProductMetaDataForm setStage={setStage} setLoading={setLoading} data={{}}/>,
        <ProductVariationsForm setStage={setStage} setLoading={setLoading} data={{}}/>,
        <ProductAdded />
    ]

  return (
    <div className="add-product-main-wrapper">
        {
            (loading===0 || loading === 1) && <div className="loader-continer">
                <div>
                    <div className="loader"></div>
                </div>
            </div>
        }
        <h3>{isEdit?'Edit':'Add New'} Product</h3>
        <div className="add-product-wrapper">
            <ul>
                <li className={`${stage===0 && 'active'}`}>Product Meta data</li>
                <li className={`${stage===1 && 'active'}`}>Product variations</li>
                <li className={`${stage===2 && 'active'}`}>Product Added</li>
            </ul>
        </div>
        {productForms[stage]}
    </div>
  )
}

const ProductAdded = () =>{
    return(<h2>Product added succesfully</h2>)
}

export default AdminAddProduct