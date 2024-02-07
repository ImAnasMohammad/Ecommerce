import { Select } from 'antd'
import React from 'react'
import Input from '../../components/Input';
import holder from '../../../img/holder.jpg'
import FileUpload from '../../components/FileUpload';

const { Option } = Select;

const ProductSubVariationForm = ({item,index,setVariations,variations}) => {

    const removeVariation = () =>{
        let newVariations = [...variations];
        newVariations.splice(index,1);
        setVariations([...newVariations])
    }

    const setValue = ()=>{}
  return (
    <div className='product-sub-variation-form'>
        <form>
            <div className='product-sub-variation-select-form'>
                <Select placeholder='Select Size' >
                    <Option>S</Option>
                    <Option>m</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXXL</Option>
                </Select>
                <Select placeholder='Select Color' >
                    <Option>red</Option>
                    <Option>orange</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                    <Option>pink</Option>
                    <Option>XXXL</Option>
                </Select>
                <Input value="" setValue={setValue} label="Quntity" type={'number'} required={true} name="quntity" />
                <Input value="" setValue={setValue} label="Price" type={'number'} required={true} name="price" />
                <Input value="" setValue={setValue} label="Discount" type={'number'} required={true} name="discount" />
            </div>
            <div className="product-sub-variation-images">
                <FileUpload src={holder}/>
                <FileUpload src={holder}/>
                <FileUpload src={holder}/>
                <FileUpload src={holder}/>
            </div>
        </form>
        <div className='remove-btn-wrapper'><button onClick={removeVariation}>Remove</button></div>
    </div>
  )
}

export default ProductSubVariationForm