import { loginImages } from 'constant/Images';
import React from 'react'
import { useForm,FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LoginController from 'customField/LoginController';
import { Col, Form ,Button, Row, Container,Spinner} from 'reactstrap';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { dangKyAction, dangNhapAction } from 'redux/action/UserAction';
import { useHistory } from 'react-router-dom';
const schema = yup.object().shape({
    HoTenInput: yup.string().required('Name is required').max(20).min(6),
    DienThoaiInput: yup.number().positive().integer().required('Telephone is required'),
    EmailInput: yup.string().max(30).email().required('Email is required'),
    UserInput:yup.string().min(6).max(20).required('Username is required'),
    PasswordInput:yup.string().min(6).max(20).required('Password is required'),
    RePasswordInput:yup.string().min(6).max(20).oneOf([yup.ref('PasswordInput')], 'Passwords must match')
});
function RegisterModal({willing,changeDangNhap}){
    const {error,token} = useSelector(state=>state.UserReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const method = useForm({
        resolver: yupResolver(schema)
      });
    const {control,handleSubmit,formState,reset} = method
    const {isSubmitting}=formState
   // console.log()
    //console.log(errors)
    const onSubmit = data => {
        const {HoTenInput,DienThoaiInput,EmailInput,UserInput,PasswordInput} = data;
        const user ={
            taiKhoan:UserInput,
            matKhau:PasswordInput,
            email:EmailInput,
            soDt:DienThoaiInput,
            hoTen:HoTenInput
        }
        const action = dangKyAction(user,history)
        dispatch(action)
        reset()
        console.log(data)

    };
    return(
        <article className={willing ? "loginModal" :"show loginModal"}>
            <Container>
            <Col sm="12">
                <img src={loginImages.logoSignIn} alt="logo"/>
            </Col>
            <Col>
                {error ? <p className="text-danger">{error}</p> : <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>}
            </Col>
            <FormProvider {...method}> 
             <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md="6">
                            <LoginController name="HoTenInput" control={control} type="text" label="Họ tên" />
                        </Col>
                        <Col md="6">
                            <LoginController name="DienThoaiInput" control={control} type="text" label="Số điện thoại" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <LoginController name="UserInput" control={control} type="text" label="Tài khoản" />
                        </Col>
                        <Col md="6">
                            <LoginController name="EmailInput" control={control} type="text" label="Email" />
                        </Col>
                    </Row>
                   <Row>
                        <Col md="6">
                            <LoginController name="PasswordInput" control={control} type="password" label="Mật khẩu" />
                        </Col>
                        <Col md="6">
                            <LoginController name="RePasswordInput" control={control} type="password" label="Xác nhận mật khẩu" />
                        </Col>
                    </Row>
                <Button color="danger" type="submit">
                {isSubmitting && <Spinner size="sm" color="primary" />} Đăng ký
                </Button>
                <Col sm="12">
                    <p>
                        Bạn chưa có tài khoản? 
                        <a href="#" onClick={(e)=>{
                            e.preventDefault()
                            changeDangNhap()
                        }}>
                            Đăng nhập
                        </a>
                    </p>
                </Col>
            </Form>
                </FormProvider>
            </Container>
        </article>
    )
}
export default RegisterModal;



// const schema = yup.object().shape({
//     HoTenInput: yup.string().required('Name is required').max(20),
//     DienThoaiInput: yup.number().positive().integer().required('Telephone is required').min(10).max(13),
//     EmailInput: yup.string().email().required('Email is required'),
//     UserInput:yup.string().min(6).max(13).required('Username is required'),
//     PasswordInput:yup.string().min(6).max(13).required('Password is required'),
//     RePasswordInput:yup.string().oneOf([yup.ref('PasswordInput')], 'Passwords must match')
// });



{/* <Col sm="12">
                <img src={loginImages.logoSignIn} />
            </Col>
             <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Container>
                 <Col sm="12">
                 <label htmlFor="hoTen">Họ và tên</label>
                      <input type="text" name="hoTen" placeholder="Họ và tên" ref={register({ minLength: 6, maxLength: 20,required: true})}/>
                      {errors.hoTen?.type === "minLength" && "Your input exceed minLength"}
                       {errors.hoTen?.type === "maxLength" && "Your input exceed maxLength"}
                      {errors.hoTen && (
                          <p style={{ color: "white" ,display:'block',margin:'0'}}>
                              {errors.hoTen.message}
                          </p>)}
                 </Col>
                
                    <Col sm="12">
                    <label htmlFor="emailInput">Email</label>
                      <input type="email" name="emailInput" placeholder="Email" ref={register({ minLength: 6, maxLength: 39 ,required: true})}/>
                      {errors.emailInput && (
                          <p style={{ color: "white" ,display:'block',margin:'0'}}>
                              {errors.emailInput.message}
                          </p>)}
                     </Col>
                
                    <Col sm="12">
                    <label htmlFor="username">Tài khoản</label>
                      <input type="text" name="username" placeholder="Tài khoản" ref={register({ minLength: 6, maxLength: 20 ,required: true})}/>
                      {errors.username && (
                          <p style={{ color: "white" ,display:'block',margin:'0'}}>
                              {errors.username.message}
                          </p>)}
                          </Col>
                
                   <Col sm="12">
                   <label htmlFor="soDienThoai">Số điện thoại</label>
                      <input type="number" name="soDienThoai" placeholder="Số Điện Thoại" ref={register({required: true})}/>
                      {errors.soDienThoai && (
                          <p style={{ color: "white",display:'block' ,margin:'0'}}>
                              {errors.soDienThoai.message}
                          </p>)}
                     </Col>
                
                     <Col sm="12">
                     <label htmlFor="matKhau">Mật khẩu</label>
                      <input type="password" name="matKhau" placeholder="Mật khẩu" ref={register({required: "Password is required!"})}/>
                      {errors.matKhau && (
                          <p style={{ color: "white" ,display:'block',margin:'0'}}>
                              {errors.matKhau.message}
                          </p>)}
                     </Col>
                      <Col sm="12">
                      <label htmlFor="xacNhanMatKhau">Xác nhận mật khẩu</label>
                      <input type="password" name="xacNhanMatKhau" placeholder="Xác Nhận Mật khẩu" ref={register({required: "Please Confirm Password!",validate: {
                      matchesPreviousPassword: value => {
                          const { matKhau } = getValues();
                          console.log(value,matKhau)
                          return matKhau === value || "Passwords should match!";
                      }}})}/>
                      {errors.xacNhanMatKhau && (
                          
                          <p style={{ color: "white" ,display:'block',margin:'0'}}>
                              {errors.xacNhanMatKhau.message}
                
                          </p>)}
                      </Col>
                  <Button color="danger" type="submit" className="my-3">
                  Đăng ký
                </Button>
                <Col sm="12">
                  <p>
                      Bạn đã có tài khoản? 
                      <a>
                          Đăng nhập
                      </a>
                  </p>
                </Col>
                </Container>
                </Form>  */}