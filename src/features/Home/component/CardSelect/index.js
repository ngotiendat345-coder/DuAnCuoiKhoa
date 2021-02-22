import Loading from 'component/Loading';
import React from 'react'
import Select from 'react-select';

function CardSelect(props){
    const{options,name,placeholder,action,previousName}=props
    let newOption = options ? options : [{value:0,label:`Chọn ${previousName}`}];
    if(props.loading){
        newOption=[{value:0,label:`Loading...`}]
    }
    function handleOnChange(e){
        if(e.value===0){
            return;
        }
       
        action(e)
    }
    return(
        <Select
                className="select"
                options={newOption}
                name={name}
                onChange={handleOnChange}
                placeholder={placeholder}
                />
              
    )
}

export default CardSelect;