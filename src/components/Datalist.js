import React from 'react'
import "../imges/img2.jpg"
import { Link } from 'react-router-dom'

function Datalist() {
    let b =0;
    const mydata = [
        {
            id: '1',
            url: 'https://source.unsplash.com/1600x900/?nature,river',
            title: 'title1',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '2',
            url: 'https://source.unsplash.com/1600x900/?nature,river',
            title: 'title2',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '3',
            url: 'https://source.unsplash.com/1600x900/?nature,river',
            title: 'title3',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '4',
            url: 'https://source.unsplash.com/1600x900/?bike,python',
            title: 'title4',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '5',
            url: 'https://source.unsplash.com/1600x900/?tech,python',
            title: 'title5',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '6',
            url: 'https://source.unsplash.com/1600x900/?nature,polute',
            title: 'title6',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '7',
            url: 'https://source.unsplash.com/1600x900/?nature,water',
            title: 'title7',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '7',
            url: 'https://source.unsplash.com/1600x900/?nature,water',
            title: 'title7',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '7',
            url: 'https://source.unsplash.com/1600x900/?nature,water',
            title: 'title7',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '7',
            url: 'https://source.unsplash.com/1600x900/?nature,water',
            title: 'title7',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '7',
            url: 'https://source.unsplash.com/1600x900/?nature,water',
            title: 'title7',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: '7',
            url: 'https://source.unsplash.com/1600x900/?nature,water',
            title: 'title7',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]
    return (
        <div className='container-fluid'>
            <div className='row'>
                {mydata.map((a) => {
                    b=b +1;
                    return (<section className='col-md-6 mt-3 col-lg-3'>
                        <div className="card shadow" style={{ boxSizing: 'border-box' }} >
                            <img src={`${a.url}${b}`} className="card-img-top p-1" alt="cvdfdsf" />
                            <div className="card-body">
                                <h5 className="card-title">{a.title}</h5>
                                <p className="card-text">{a.text}</p>
                                <Link to="#" className="btn btn-outline-warning">{a.id}</Link>
                            </div>
                        </div>
                    </section>)
                })}
            </div>
        </div>
    )
}

export default Datalist