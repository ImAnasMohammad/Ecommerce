import React from 'react'

const TextArea = ({name,setValue,value,required,className,label,row}) => {
  return (
    <div className='input-wrapper' key={name}>
        <label>
            <textarea
                name={name}
                onChange={setValue}
                className={className}
                required={required}
                row={row}
            />
            <span>{label}</span>
        </label>
    </div>
  )
}

export default TextArea