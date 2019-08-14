import React,{useState,useEffect} from 'react';
import axios from 'axios'
import ImgCard from './ImgCard';

export default function DataCall() {
   
    const[imgUrl,setImg] = useState()
    const[imgDate,setImgDate] =useState()
    const[imgTitle,setImgTitle]=useState()

    useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=r3mevhcfPbBo9Aag9akrfkirveiS9hAaBDrxvZAO")
    .then(res=>{
    
         const imgU = res.data.url
         const id = res.data.date
         const title = res.data.title
         
        
         console.log(res)
    
        setImg(imgU)
        setImgDate(id)
        setImgTitle(title)
    })
    .catch(err=>
        console.log("Now You Know You Done Messed Up:",err))
    },[])

    return(
        <div className="NasaImg">
   
         <ImgCard key={imgDate} image={imgUrl} title={imgTitle} myDate={imgDate}/>;

         
        </div>
    )
}
