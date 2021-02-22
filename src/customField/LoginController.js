import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'

function LoginController(props){
    const {errors} = useFormContext()
    //console.log(errors)
    const {label,type,control,name}=props
    const disabled = props.disabled ? true :false;
    const defaultValue = props.defaultValue ? props.defaultValue : ""
    //console.log(props)
    return(
        <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={(props)=>{
            const showError = errors[props.name] ? true:false
            //console.log(props)
            return(
            <FormGroup>
                <Label for={name}>{label}</Label>
                <Input  id={props.name} type={type}  invalid={showError} placeholder={label} disabled={disabled}  {...props}/>
                {showError && <FormFeedback>{errors[name].message}</FormFeedback>}
            </FormGroup>
            )
        }}
        />
    )
}

export default LoginController;