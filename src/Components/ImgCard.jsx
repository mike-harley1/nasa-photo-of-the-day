import React from 'react'
import DataCall from './DataCall'

const ImgCard = props => {
    return(
        <div className="ImgCard" key={props}>
            <h2>Nasa Photo Of The Day:{}</h2>
            <img src ={props}/>>
        </div>
    )
}
export default ImgCard