import React, { useEffect, useRef, useState } from 'react'

const Filter = ({filters}) => {
    const filterContiner = useRef();
    const shadowContiner = useRef();
    const [filterActive,setFilterActive] = useState(false);
    const [activeOptions,setActiveOptions] = useState();
    
    const handleChange = (toggle,filter,option)=>{
        console.log(toggle,filter,option)
    }
    const toogleOptions = (i)=>{
        if(i===activeOptions){
            setActiveOptions(undefined)
        }else{
            setActiveOptions(i)
        }
    }
    useEffect(()=>{
        filterContiner.current.classList.toggle('active',filterActive); 
        shadowContiner.current.classList.toggle('active',filterActive);
        document.body.classList.toggle('overFlowhidden',filterActive);
    },[filterActive]);
  return (
            <>
                <div className="sort-filter-mobile-view-wrapper">
                    <div>sort</div>
                    <div onClick={()=>setFilterActive(true)}>filter</div>
                </div>
                <div className="shadow-wrapper" ref={shadowContiner}onClick={()=>setFilterActive(false)} />
                <div className="filter-wrapper" ref={filterContiner}>
                    <h3>Filters</h3>
                    <div className="all-filters">
                    {
                        filters?.map((filter,i)=>(
                        <div className="single-filter">
                            <h4 onClick={()=>toogleOptions(i)}>{filter.name}<span className={`${activeOptions===i?'active':''}`}>&gt;</span></h4>
                            <div className={`filter-options ${activeOptions===i?'active':''}`}>
                                {
                                    filter?.options?.map(option=>(
                                    <label htmlFor={option} style={{userSelect:'none',display:'flex',alignItems:'center'}}>
                                        <input type="checkbox" id={option} onChange={(e)=>handleChange(e.target.checked,filter.name,option)} className='checkBox-hidden' key={option}/>
                                        <div className='customCheckBox'></div>
                                        {option}
                                    </label>
                                    ))
                                }
                            </div>
                        </div>
                        ))
                    }
                        <div className="filter-btns-wrapper">
                            <button className="btn btn-secondry">Reset</button>
                            <button className="btn btn-primary">apply</button>
                        </div>
                    </div>
                </div>
            </>
  )
}

export default Filter