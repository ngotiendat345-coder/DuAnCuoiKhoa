import React, { useEffect } from 'react'
import LoginController from 'customField/LoginController';
import { useForm,FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Row, Col,Table, Form, Container, Button} from 'reactstrap'
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getThongTinAccount ,updateUserAction} from 'redux/action/UserAction';
import Loading from 'component/Loading';
import swal from 'sweetalert';
const schema = yup.object().shape({
    HoTenInput: yup.string().required('Name is required').max(20).min(6),
    DienThoaiInput: yup.number().positive().integer().required('Telephone is required'),
    EmailInput: yup.string().max(30).email().required('Email is required'),
    UserInput:yup.string().min(6).max(20).required('Username is required'),
    PasswordInput:yup.string().min(6).max(20).required('Password is required'),
    RePasswordInput:yup.string().min(6).max(20).oneOf([yup.ref('PasswordInput')], 'Passwords must match')
});

function ThongTinTaiKhoan(){
    
    const {userInfo,loading,detailInfo} = useSelector(state=>state.UserReducer)
    const dispatch = useDispatch()
    const method = useForm({
        resolver: yupResolver(schema),
      
      });
      console.log(method)
      const {control,handleSubmit,formState} = method
      const onSubmit = data => {
        const {HoTenInput,DienThoaiInput,EmailInput,UserInput,PasswordInput} = data;
        console.log(detailInfo,UserInput,PasswordInput)
        const user ={
            taiKhoan:UserInput,
            matKhau:PasswordInput,
            email:EmailInput,
            soDt:DienThoaiInput,
            hoTen:HoTenInput
        }
        if(UserInput !== detailInfo.taiKhoan || PasswordInput !==detailInfo.matKhau){
            swal("Có lỗi!", "Xin lỗi bạn không được thay đổi tài khoản hoặc mật khẩu ở mục Thông Tin!", "error");
            return;
        }
        else{
            swal({
                title: "Bạn chắc chứ?",
                text: "Khi chỉnh sửa, bạn sẽ không hồi phục được dữ liệu cũ!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    
                  swal("Dữ liệu của bạn sẽ được chỉnh sửa", {
                    icon: "success",
                  });
                  dispatch(updateUserAction(user))
                } else {
                  swal("Bạn đã không chỉnh sửa dữ liệu của mình!");
                }
              });
        }
     
    
    };
  
    
    return(
        <FormProvider {...method}> 
        <Form onSubmit={handleSubmit(onSubmit)}>
               <Container>
               <Row>
                   <Col md="6">
                       <LoginController name="HoTenInput" control={control} type="text" label="Họ tên" defaultValue={detailInfo.hoTen}/>
                   </Col>
                   <Col md="6">
                       <LoginController name="DienThoaiInput" control={control} type="text" label="Số điện thoại" defaultValue={detailInfo.soDT}/>
                   </Col>
               </Row>
               <Row>
                   <Col md="6">
                       <LoginController name="UserInput" control={control} type="text" label="Tài khoản" defaultValue={detailInfo.taiKhoan}/>
                   </Col>
                   <Col md="6">
                       <LoginController name="EmailInput" control={control} type="text" label="Email" defaultValue={detailInfo.email} />
                   </Col>
               </Row>
               <Row>
                   <Col md="6">
                       <LoginController name="PasswordInput" control={control} type="password" label="Mật khẩu"  defaultValue={detailInfo.matKhau}/>
                   </Col>
               </Row>
           <Button color="danger" type="submit" className="text-center w-100">
           {/* {isSubmitting && <Spinner size="sm" color="primary" />} Cập nhật */}
           Cập nhật
           </Button>
               </Container>
           
       </Form>
           </FormProvider>
    )
}

export default ThongTinTaiKhoan;

 //console.log(detailInfo)
    // const initValue = { 
        
    //     HoTenInput: detailInfo.hoTen,
    //     DienThoaiInput: detailInfo.soDT,
    //     EmailInput: detailInfo.email,
    //     PasswordInput:detailInfo.matKhau,
    //     UserInput:detailInfo.taiKhoan,
    //   }  defaultValues: { 
    //         HoTenInput: detailInfo.hoTen,
    //         DienThoaiInput: detailInfo.soDT,
    //         EmailInput: detailInfo.email,
    //         PasswordInput:detailInfo.matKhau,
    //         UserInput:detailInfo.taiKhoan,
    //       }