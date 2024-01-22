import React, { useEffect } from 'react';
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';
import { useLoading } from '../../context/loading';
import Spinner from '../components/Spinner';
const Layout = ({children,desc,author,keywords,title,mainClass,activePage}) => {
  const [loading,setLoading] = useLoading();

  return (
    <>
      <NavBar/>
      {
        loading===1?<>
          <Spinner/>
        </>:<>
          <Helmet>
                <meta name="description"  content={desc} />
                <meta name="keywords"  content={keywords} />
                <meta name="author"  content={author} />
                <title>{title}</title>
          </Helmet>
          <main className={mainClass}>{children}</main>
          <Toaster />
      </>
      }
    </>
  )
}

export default Layout