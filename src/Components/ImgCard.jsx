import React from 'react'


const ImgCard = props => {
    return(
        <div className="ImgCard" key={props.myDate}>
            <h2>{props.title}</h2>
            <img src ={props.image} alt ={props.title}/>
            <p>{props.imgExp}</p>
        </div>
    )
}
export default ImgCard