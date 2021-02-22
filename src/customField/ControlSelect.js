import React from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

function SelectConTroller(props){
    const {options,name,control,placeholder,getFilm} = props
   // console.log(props)
        
    return (
        <Controller
        render={(props)=>{
            console.log(props)
            const handleOnChange=(event)=>{
                getFilm(event)
                props.onChange(event)
            }
            return(
                <Select 
                {...props}
                options={options}
                onChange={handleOnChange}
                placeholder={placeholder}
                />
            )
        }}
        
        name={name}
        control={control}
        />
      
    )
}

export default SelectConTroller;

