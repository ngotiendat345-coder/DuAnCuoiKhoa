import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { updateUserAction } from "redux/action/UserAction";
import "./style.scss";

function ThayDoiMatKhau() {
  const dispatch = useDispatch();
  const { loading, detailInfo } = useSelector((state) => state.UserReducer);
  console.log(detailInfo);
  const { register, handleSubmit, reset, getValues, errors } = useForm();
  const onSubmit = (data) => {
    const { matKhau } = data;
    const user = { ...detailInfo, matKhau: matKhau };
    dispatch(updateUserAction(user));
    //console.log(user)
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="thayDoiMatKhauForm">
      <Container>
        <Row>
          <Col sm="12" className="thayDoiMatKhauForm__oldPassword">
            <FormGroup className="customFormGroup">
              <input
                type="password"
                name="oldPassword"
                required
                ref={register({
                  minLength: {
                    value: 6,
                    message: "Min length is 6",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max length is 20",
                  },
                  required: "Password is required",
                  validate: {
                    matchesOldPreviousPassword: (value) => {
                      const { matKhau } = detailInfo;
                      // console.log(matKhau,value)
                      return matKhau === value || "Old passwords should match";
                    },
                  },
                })}
              />
              <label htmlFor="oldPassword" className="customLabel">
                {"Mật khẩu cũ".split("").map((item, index) => {
                  return (
                    <span
                      key={index}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item}
                    </span>
                  );
                })}
              </label>
              {errors.oldPassword && (
                <small
                  style={{
                    color: "red",
                    display: "block",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  {errors.oldPassword.message}
                </small>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="thayDoiMatKhauForm__newPassword">
            <FormGroup className="customFormGroup">
              <input
                type="password"
                name="matKhau"
                required
                ref={register({
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Min length is 6",
                  },
                })}
              />
              <label htmlFor="matKhau" className="customLabel">
                {"Mật khẩu".split("").map((item, index) => {
                  return (
                    <span
                      key={index}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item}
                    </span>
                  );
                })}
              </label>
              {errors.matKhau && (
                <small
                  style={{
                    color: "red",
                    display: "block",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  {errors.matKhau.message}
                </small>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="thayDoiMatKhauForm__ReNewPassword">
            <FormGroup className="customFormGroup">
              <input
                type="password"
                name="xacNhanMatKhau"
                required
                ref={register({
                  required: "Confirm Password is required",
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { matKhau } = getValues();
                      return matKhau === value || "Passwords should match!";
                    },
                  },
                })}
              />
              <label htmlFor="xacNhanMatKhau" className="customLabel">
                {"Xác nhận lại".split("").map((item, index) => {
                  return (
                    <span
                      key={index}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item}
                    </span>
                  );
                })}
              </label>
              {errors.xacNhanMatKhau && (
                <small
                  style={{
                    color: "red",
                    display: "block",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  {errors.xacNhanMatKhau.message}
                </small>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Button color="danger" type="submit" className="text-center w-100">
          {/* {isSubmitting && <Spinner size="sm" color="primary" />} Cập nhật */}
          Thay đổi mật khẩu
        </Button>
      </Container>
    </Form>
  );
}

export default ThayDoiMatKhau;
