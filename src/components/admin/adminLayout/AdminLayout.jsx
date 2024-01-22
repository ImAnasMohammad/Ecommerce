import React from 'react'
import AdminNav from './AdminNav'
import Layout from '../../layouts/Layout'
import Dailog from '../../layouts/Dailog'
import { FaPlus } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { useLoading } from '../../../context/loading';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { format } from '../../../ReusableFunctions/formatCurrency'


const AdminLayout = ({children,dailogTitle,currentDailougContent,setCurrentDailougContent,page,handleCreate,handleSearch,searchQuery,setSearchQuery,count}) => {
  const [loading] = useLoading();
  const searchAvoid = ['website','dashboard'];
  const newBtnAvoid = ['website','users','dashboard'];
  const paginationAvoid = ['dashboard','website'];
  const filterAvoid = ['dashboard','website'];
  count = format(count);
  return (
    <Layout>
        <div className='profile-wrapper'>
            <AdminNav/>
            <div className='main-admin-wrapper'>
              <Dailog title={dailogTitle} dailogContent={currentDailougContent} setDailogContent={setCurrentDailougContent} >{currentDailougContent}</Dailog>
              <div>
                <div className="heading-admin-page">
                    <h2>{page==="dashboard"?"Dashboard":`Manage ${page}`}</h2>
                    {!newBtnAvoid?.includes(page) && <button onClick={handleCreate}  disabled={loading===2} className="btn btn-primary"><FaPlus/> New {page}</button>}
                </div>
                {
                  !searchAvoid?.includes(page) && <div className="search-main-wrapper-admin">
                    <div className='search-wrapper-admin'>
                      <div className='search-wrapper'>
                        <CiSearch/>
                        <input type="search" className='search-input' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} placeholder='Search'/>
                      </div>
                      <button disabled={loading===2} onClick={handleSearch} className="btn btn-primary search-btn"> Search</button>
                    </div>
                    {
                      !filterAvoid?.includes(page) && <button disabled={loading===2} className="btn btn-primary filter-btn"><HiAdjustmentsHorizontal/>Filter</button>
                    }
                  </div>
                }
                <div className="main-content-admin-wrapper">
                  {
                    loading ===2 ? <div className='loader' />:children
                  }
                  {loading!==2 && !paginationAvoid?.includes(page) && <div className='admin-pagenation'>
                        <button className="btn btn-primary"><FaAngleLeft/></button>
                        <span className="current-page-admin">1</span>
                        <button disabled={true} className="btn btn-primary"><FaAngleRight/></button>
                      </div>
                    }
                </div>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default AdminLayout