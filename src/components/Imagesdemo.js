import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

function Imagesdemo(props) {
  const [sval, sfun] = useState([]);
  useEffect(()=>{
    axios.get(`https://api.unsplash.com/search/photos?query=${props.apiSearchLetters}&per_page=30&orientation=landscape&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4`).then((res)=>{
            sfun(res.data.results);
    })
  },[props.apiSearchLetters]);

  return (
    <Fragment>

      { sval.map((a) => {
        return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-6 mx-3'>
          <div className='ratio ratio-4x3'>
            <img src={a.urls.full} className='img-fluid' alt='cant load...' />
            </div>
        </div>
        )
      })} 
    </Fragment>
  )

}

export default Imagesdemo