import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { category } from './Home';


function Axiosapishow() {

    let { id } = useParams();
    let apishow = `https://api.unsplash.com/search/photos?query=${category}&per_page=30&orientation=landscape&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4`
    const [myvar, myfun] = useState({});
    const [x, y] = useState({});
    const [a, b] = useState({});


    useEffect(() => {
        axios.get(apishow).then((res) => {
            for (var i = 0; i < res.data.results.length; i++) {
                if (res.data.results[i].id === id) {
                    myfun(res.data.results[i])
                    y(res.data.results[i].urls)
                    b(res.data.results[i].user)
                }
            }
        });
    })

    return (


        <div className='container-lg'>
            <div className='row'>
                <div className='position-relative col-12 ' >
                    <div className='py-2'><img src={x.full} className='w-100' alt='Img unavailable!!'/></div>
                    <div className='position-absolute imgcptnposition rounded p-1 shadow' style={{ backgroundColor: '#a0a0a033' }}>
                        <div className='dynamic-ftomedium col-12'>{a.name}</div>
                        <div className='h-6 dynamic-ftosmall col-12'>{myvar.alt_description}</div>
                        <div className='h-6 dynamic-ftosmall col-12' style={{ color: '#e2e2e2e0' }}>{myvar.description}</div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Axiosapishow