import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export let modifyApi = [''];
function Api() {
  let { realsearch } = useParams();
  let api = `https://api.unsplash.com/search/photos?query=${realsearch}&per_page=30&orientation=landscape&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4`;
  
  const [datav,dataf] = useState([]);
  
  useEffect(()=>{
    
  axios.get(api).then((res)=>{
    dataf(res.data.results);

  })
})

  return (
    <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            {datav.map((a)=>{
              var b;
              return(
            <section className='col-md-4 my-2' key={a.id}>
            <div className="card shadow" style={{ boxSizing: 'border-box' }} >
                            <Link to={a.id}><img src={a.urls.full} className="card-img-top p-1" alt="cvdfdsf" onClick={()=>{
                              modifyApi = [`https://api.unsplash.com/search/photos?query=${realsearch}&per_page=30&orientation=landscape&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4`];
                            }}/></Link>
                            <div className="card-body">
                                <h5 className="card-title">{a.user.name}</h5>
                                <p className="card-text">{a.alt_description}</p>
                                <button className="btn btn-outline-warning fnpls"  onClick={()=>{
                                  return (
                                  b = parseInt(document.getElementsByClassName('fnpls')[[datav.indexOf(a)]].innerHTML),
                                  document.getElementsByClassName('fnpls')[[datav.indexOf(a)]].innerHTML = b + 1

                                  )
                                }}>{a.likes}</button><span className='text-success'>   likes</span>
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

export default Api