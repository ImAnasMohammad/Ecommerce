import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const PriceDetails = ({stage,setStage}) => {
  return (
    <div className='price-details-wrapper'>
        <h3>Price Details</h3>
      <div className="line"></div>
      <table className='price-table'>
        <tr>
            <td>Total MRP</td>
            <td>Rs 200</td>
        </tr>
        <tr>
            <td>Coupan Savings</td>
            <td>Rs 200</td>
        </tr>
        <tr className='success'>
            <td>Discount On MRP</td>
            <td>-Rs 200</td>
        </tr>
        <tr>
            <td>Delivery Fee</td>
            <td>Rs 200</td>
        </tr>
        <tr className='o'>
            <td>Total Amount</td>
            <td>Rs 200</td>
        </tr>
      </table>
      <div>
        <button className='btn btn-primary proceed-btn' onClick={()=>setStage(prev=>prev+1)}>{stage===1?"Proceed To pay":stage===3?"Done":<span>Next <FaArrowRight className='proceed-icon'/></span>}</button>
      </div>
    </div>
  )
}

export default PriceDetails