import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from "./Axiosapi"

function Axiosapishow() {

    let { id } = useParams();
    const [myvar, myfun] = useState({});
    const [x, y] = useState({});
    const [a, b] = useState({});


    useEffect(() => {
        axios.get(api).then((res) => {
            for (var i = 0; i < res.data.results.length; i++) {
                if (res.data.results[i].id === id) {
                    myfun(res.data.results[i])
                    y(res.data.results[i].urls)
                    b(res.data.results[i].user)
                }
            }
        });
    }, [id])

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