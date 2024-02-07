import React from 'react'

const FileUpload = ({src}) => {
  return (
    <div className='file-upload-wrapper'>
        <label>
            <div className='layer'></div>
            <img src={src} alt="Image preview" />
            <input type="file"  />
        </label>
    </div>
  )
}

export default FileUpload