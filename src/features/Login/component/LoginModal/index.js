import { loginImages } from 'constant/Images';
//import GroupField from 'customField/GroupField';
import React from 'react'
import {  FormProvider, useForm } from 'react-hook-form';
import { Col, Form ,Button,Alert} from 'reactstrap';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LoginController from 'customField/LoginController';
import './dangNhap.scss';
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from 'redux/action/UserAction';
import { useHistory } from 'react-router-dom';


const schema = yup.object().shape({
    UserField: yup.string().min(6).required(),
    PasswordField: yup.string().min(6).required(),
});

// PasswordField: yup.string().required(),
function LoginModal({willing,changeDangNhap}){
    const {error} = useSelector(state=>state.UserReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    const method = useForm({
        resolver: yupResolver(schema)
      });
    const {control,handleSubmit} = method
    const onSubmit = data => {
        const {UserField,PasswordField}=data;
        
        const user = {
            taiKhoan:UserField,
            matKhau:PasswordField
        }
        console.log(user)
       // const action = ;
        dispatch(dangNhapAction(user,history))
       
    };
    return(
        <article className={willing?"show dangNhap" : "dangNhap"}>
            <Col sm="12">
                <img src={loginImages.logoSignIn} />
            </Col>
            <Col>
                {error ? <p className="text-danger">{error}</p>: <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>}
            </Col>
            <FormProvider {...method}> 
             <Form onSubmit={handleSubmit(onSubmit)}>
                <Col sm="12">
                   <LoginController name="UserField" control={control} type="text" label="Tài khoản"/>
                </Col>
                <Col sm="12">
                <LoginController name="PasswordField" control={control} type="password" label="Mật khẩu"/>
                </Col>
                <Col sm="12">
                <Button color="danger" type="submit">
                    Đăng nhập
                </Button>
                </Col>
                <Col sm="12">

                    <p>
                        Bạn chưa có tài khoản? 
                        <a href="#" onClick={(e)=>{
                            e.preventDefault();
                            changeDangNhap()
                        }}>
                            Đăng ký
                        </a>
                    </p>
                </Col>
            </Form>
                </FormProvider>
        </article>
    )
}

export default LoginModal;


// <Form>
//                 <Col sm="12">
//                     <Controller
//                         as={GroupField}
//                         name="UserField"
//                         control={control}
//                         placeholder="Tên Tài Khoản"
//                         type="text"
//                         label="Tài khoản"
//                         />
//                 </Col>
//                 <Col sm="12">
//                     <Controller
//                         as={GroupField}
//                         name="PasswordField"
//                         control={control}
//                         placeholder="Mật Khẩu"
//                         type="password"
//                         label="Mật khẩu"
//                         />
//                 </Col>
//                 <Col sm="12">
//                 <Button color="danger" type="submit">
//                     Đăng nhập
//                 </Button>
//                 </Col>
//                 <Col sm="12">
//                     <p>
//                         Bạn chưa có tài khoản? 
//                         <a>
//                             Đăng ký
//                         </a>
//                     </p>
//                 </Col>
//             </Form>