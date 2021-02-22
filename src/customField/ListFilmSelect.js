import React from 'react'
import Select from 'react-select';
import { Col } from 'reactstrap';

function ListFilmSelect(props){
    const {form,field
    ,placeholder,options,getFilm}=props
    const {value,name} = field
//console.log(props)
    const selectOption = options.find((item)=>item.value===value)
    function handleOnchange(event){
        console.log(event)
        const tempTarget ={
            target:{
                value:event.value,
                name:name
            }
        }
        console.log(event)
        getFilm(event)
        field.onChange(tempTarget)
    }
    return(
        <Col md="4">
            <Select {...field} id={name} placeholder={placeholder} options={options} value={selectOption} onChange={handleOnchange}/>
        </Col>
    )
}

export default ListFilmSelect;