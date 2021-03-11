import React from 'react'

function customLabel({name,label}){
    const arrayName = label.split('');
    return(
        <label for={name}>
            {arrayName.map((item,index)=>{
                return <span key={index} style={{transitionDelay:`${index * 50}ms`}}>{item}</span>
            })}
        </label>
    )
}

export default customLabel;