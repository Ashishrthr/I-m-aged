import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

function Axiosapi() {
  const [datav,dataf] = useState([]);
  const myfn = ()=>{
  axios.get("https://api.unsplash.com/search/photos?query=puppies&per_page=30&orientation=landscape&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4").then((res)=>{
    console.log(res.data.results);
    dataf(res.data.results)

  })
}
  return (
    <Fragment>

        <button className='btn btn-success' type='button' onClick={myfn}>trigger</button>
        
        <div className='container-fluid'>
          <div className='row'>
            {datav.map((a)=>{
              return(
            <section className='col-md-4 my-2' key={a.id}>
            <div className="card shadow" style={{ boxSizing: 'border-box' }} >
                            <Link to={a.id}><img src={a.urls.full} className="card-img-top p-1" alt="cvdfdsf" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">{a.user.name}</h5>
                                <p className="card-text">{a.alt_description}</p>
                                <Link to="#" className="btn btn-outline-warning">{a.likes}</Link><span className='text-success'>   likes</span>
                            </div>
                        </div>
            </section>
            
              )
            })}
          </div>
        </div>
    </Fragment>
  )
}

export default Axiosapi