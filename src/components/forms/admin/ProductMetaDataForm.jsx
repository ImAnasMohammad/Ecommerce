
import React from 'react'
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { Select } from 'antd';

const  {Option} = Select;

const ProductMetaDataForm = ({data,setLoading,setStage}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div className='meta-data-form-wrapper'>
      <form onSubmit={handleSubmit}>
        <Input value={''} setValue={handleSubmit} label="Product Name" type="text" required={true} name='name'/>
        <TextArea className='text-area' row={5} value={''} setValue={handleSubmit} label={"Product description"} required={true} name={'description'}/>
        <Select style={{width:'100%'}} placeholder="Select Category">
            <Option>Hello</Option>
            <Option>Hello</Option>
            <Option>Hello</Option>
        </Select>
        <Select style={{width:'100%'}} placeholder="Select Sub Category">
            <Option>Hello</Option>
            <Option>Hello</Option>
            <Option>Hello</Option>
        </Select>
        <Select style={{width:'100%'}} placeholder="Select Product type">
            <Option>Hello</Option>
            <Option>Hello</Option>
            <Option>Hello</Option>
        </Select>
        <div className="button-wrapper">
          <button className="btn btn-secondry">Back</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  )
}

export default ProductMetaDataForm