import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export function api(){
  return(
    "https://api.unsplash.com/search/photos?query=life&per_page=30&orientation=squarish&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4"
  )
}
function Axiosapi() {
  const apilink= api();
  const [datav,dataf] = useState([]);
  useEffect(()=>{
  axios.get(apilink).then((res)=>{
    console.log(res.data.results);
    dataf(res.data.results)

  })
},[apilink])

  return (
    <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            {datav.map((a)=>{
              var b;
              return(
            <section className='col-md-4 my-2' key={a.id}>
            <div className="card shadow" style={{ boxSizing: 'border-box' }} >
                            <Link to={a.id}><img src={a.urls.full} className="card-img-top p-1" alt="cvdfdsf" /></Link>
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

export default Axiosapi
