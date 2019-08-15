    
import React from 'react'
import Styled from 'styled-components'

const Date = Styled.div
`
text-align:center;
font-size:80px;
color: red;
`;
const Title = Styled.div
`
font-size:80px;
color: yellow;
border: 2px dotted black;

`
const Descript = Styled.div 
`text-align:center;
margin:0 auto;
 font-size:34px;

width:80%;
`
const TextCont = Styled.div
`
background-color:red;
// max-width: 960px;
// margin-left: 50rem;


`;

const ImgCard = props => {
    return(
        <div className="ImgCard" key={props.myDate}>
             <Date>{props.date}</Date>
            <Title>{props.title}</Title>
           
            <img src ={props.image} alt ={props.title}/>
            <TextCont className='textCont'>
            <Descript>{props.imgExp}</Descript>
            </TextCont>
        </div>
    )
}
export default ImgCard