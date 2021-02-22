
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Form, Row } from 'reactstrap';
import { updateUserAction } from 'redux/action/UserAction';
import './style.scss'


function ThayDoiMatKhau(){
   
    const dispatch = useDispatch()
    const {loading,detailInfo} = useSelector(state=>state.UserReducer)
    console.log(detailInfo)
    const {register,handleSubmit,reset,getValues,errors} = useForm()
    const onSubmit = data => {
        const {matKhau}= data;
        const user = {...detailInfo,matKhau:matKhau};
        dispatch(updateUserAction(user))
        //console.log(user)
       reset()
    }
    return(
      
        <Form onSubmit={handleSubmit(onSubmit)} className="thayDoiMatKhauForm">
               <Container>
               <Row>
               <Col sm="12" className="thayDoiMatKhauForm__oldPassword">
                 <label htmlFor="oldPassword">Mật khẩu cũ</label>
                      <input type="password" name="oldPassword" placeholder="Mật Khẩu Cũ" ref={register({ minLength: {
                          value:6,message:"Min length is 6"
                      }, maxLength: {
                          value:20, message: "Max length is 20",
                      },required: 'Password is required',
                      validate:{
                          matchesOldPreviousPassword:(value)=>{
                              const {matKhau} = detailInfo;
                             // console.log(matKhau,value)
                              return matKhau===value || "Old passwords should match"
                          }
                      }})}/>
                     
                      {errors.oldPassword && (
                          <small style={{ color: "red" ,display:'block',margin:'0',textAlign:'center'}}>
                              {errors.oldPassword.message}
                          </small>)}
                 </Col>
               </Row>
               <Row>
               <Col sm="12" className="thayDoiMatKhauForm__newPassword">
                     <label htmlFor="matKhau">Mật khẩu</label>
                      <input type="password" name="matKhau" placeholder="Mật khẩu" ref={register({required: "Password is required!",
                      minLength: {
                          value:6,message:"Min length is 6"
                      }})}/>
                      {errors.matKhau && (
                          <small style={{ color: "red" ,display:'block',margin:'0',textAlign:'center'}}>
                              {errors.matKhau.message}
                          </small>)}
                     </Col>
               </Row>
               <Row>
               <Col sm="12" className="thayDoiMatKhauForm__ReNewPassword">
                      <label htmlFor="xacNhanMatKhau">Xác nhận mật khẩu</label>
                      <input type="password" name="xacNhanMatKhau" placeholder="Xác Nhận Mật khẩu" ref={register({required:'Confirm Password is required',validate:{
                          matchesPreviousPassword:(value)=>{
                            const { matKhau } = getValues();
                            return matKhau === value || "Passwords should match!";
                          }
                      }})}/>
                      {errors.xacNhanMatKhau && (
                          
                          <small style={{ color: "red" ,display:'block',margin:'0',textAlign:'center'}}>
                              {errors.xacNhanMatKhau.message}
                
                          </small>)}
                      </Col>
               </Row>
           <Button color="danger" type="submit" className="text-center w-100">
           {/* {isSubmitting && <Spinner size="sm" color="primary" />} Cập nhật */}
           Thay đổi mật khẩu
           </Button>
               </Container>
           
       </Form>
          
    )
}

export default ThayDoiMatKhau;