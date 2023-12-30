import React from 'react'

const Input = ({value,setValue,label,type,required,clas,name}) => {
  return (
    <div className='input-wrapper' key={name}>
        <label>
            <input
                type={type}
                name={name}
                onChange={setValue}
                className={clas}
                required={required}
                value={value}
            />
            <span>{label}</span>
        </label>
    </div>
  )
}

export default Input