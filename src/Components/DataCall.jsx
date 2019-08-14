import React,{useState,useEffect} from 'react';
import axios from 'axios'
import ImgCard from './ImgCard';

export default function DataCall() {
    const[imgUrl,setImg] = useState({});

    useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=r3mevhcfPbBo9Aag9akrfkirveiS9hAaBDrxvZAO")
    .then(res=>{
        const data = res.data
        console.log(data)
    })
    },[])


    return(
        <div className="NasaImg">
            <ImgCard/>
        </div>
    )
}
