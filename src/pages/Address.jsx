import React from 'react'
import ProfileLayout from '../components/layouts/ProfileLayout'
import AddressItems from '../components/AddressItems'

const Address = () => {
  return (
    <ProfileLayout>
      <div className="profile-info-wrapper">
        <AddressItems/>
      </div>
    </ProfileLayout>
  )
}

export default Address