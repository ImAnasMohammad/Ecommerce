import React from 'react'
import Layout from './Layout'
import ProfileNavBar from './ProfileNavBar'

const ProfileLayout = ({children,desc,author,keywords,title,mainClass,name}) => {
  return (
    <Layout desc={desc} author={author} keywords={keywords} title={title} mainClass={mainClass} activePage={0}>
        <div className='profile-wrapper'>
            <ProfileNavBar name={name}/>
            <div>{children}</div>
        </div>

    </Layout>
  )
}

export default ProfileLayout