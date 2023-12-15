import React from 'react';
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';
const Layout = ({children,desc,author,keywords,title,mainClass,activePage}) => {
  return (
    <>
      <Helmet>
            <meta name="description"  content={desc} />
            <meta name="keywords"  content={keywords} />
            <meta name="author"  content={author} />
            <title>{title}</title>
      </Helmet>
      <NavBar activePage={activePage} />
      <main className={mainClass}>{children}</main>
      <Toaster />
    </>
  )
}

export default Layout