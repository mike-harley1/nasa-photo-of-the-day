    
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import ImgCard from './ImgCard';

export default function DataCall() {
   
    const[imgUrl,setImg] = useState()
    const[imgDate,setImgDate] =useState()
    const[imgTitle,setImgTitle] =useState()
    const[imgExp,setImgExp] =useState("")

    useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=r3mevhcfPbBo9Aag9akrfkirveiS9hAaBDrxvZAO")
    
    .then(res=>{
    
         const imgU = res.data.hdurl
         const id = res.data.date
         const title = res.data.title
         const explanation = res.data.explanation
         
        
         console.log(explanation)
    
        setImg(imgU)
        setImgDate(id)
        setImgTitle(title)
        setImgExp(explanation)
    })

    .catch(err=>
        console.log("Now You Know You Done Messed Up:",err))
    },[])
    if (!imgUrl||!imgDate||!imgDate||!imgExp) return <h3>Loading...</h3>;
    else

    return(
        <div className="NasaImg">
            
            
   
         <ImgCard key={imgDate} date={imgDate} imgExp={imgExp} image={imgUrl} title={imgTitle} myDate={imgDate}/>;

         
        </div>
    )
}