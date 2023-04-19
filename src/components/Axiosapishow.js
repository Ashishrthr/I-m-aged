import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Axiosapishow() {
    
    let { id } = useParams();
    const [myvar, myfun] = useState([]);
    const[x,y]=useState({});
    const [a,b]=useState({});
    const [c,d]=useState({});

    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query=puppies&per_page=30&orientation=landscape&client_id=1Kc5tj6qtFQj7B0rb5yIO4KQDQ0DT3YivyZBItn37m4").then((res)=>{
            myfun(res.data.results);
            console.log("add array"); 
            for( var i=0; i<myvar.length;i++)
            {
                if(myvar[i].id === id){
                    y(myvar[i])
                    console.log(x)
                }
            }
           
            console.log("ok")


        });
           
       
    },[])
    
    
    
  
    
    


    return (
       
       
            <div className='container-fluid'>
                <div className='row'>
                    <div className='position-relative'>
                        <img className='position-absolute start-0' alt='oops'  src={x.urls.full}/>
                        <h1>{x.id}</h1>
                        {console.log(x.urls.full)}

                    </div>
                </div>
            </div>
        

    )
}

export default Axiosapishow