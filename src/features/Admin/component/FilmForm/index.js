import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm, FormProvider } from "react-hook-form";
import FormGroup from "../FormGroup";

FilmForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  isAdding: PropTypes.bool.isRequired,
};

function FilmForm({ initialValues, handleOnSubmit, isAdding }) {
  const [hinhAnhModal, setHinhAnhModal] = useState(false);
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    handleOnSubmit(data);
    reset();
    // console.log(data);
  };
  return (
    <section className="sectionUpdate">
      {!isAdding && <small>Đổi tên và mã nhóm thì đổi cả hình ảnh</small>}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            name="maNhom"
            label="Mã nhóm:"
            type="text"
            placeholder="VD:GP01"
            defaultValue={initialValues["maNhom"]}
            pattern={{
              required: "Mã nhóm không được để trống!",
              pattern: {
                value: /^GP0[0-9]/i,
                message: "Sai định dạng",
              },
            }}
          />
          <FormGroup
            name="tenPhim"
            label="Tên phim:"
            type="text"
            placeholder="VD:Avenger"
            defaultValue={initialValues["tenPhim"]}
            pattern={{
              required: "Tên phim không được để trống!",
              minLength: {
                value: 6,
                message: "Độ dài trên 6 ký tự",
              },
            }}
          />
          <FormGroup
            name="trailer"
            label="Trailer:"
            type="text"
            defaultValue={initialValues["trailer"]}
            placeholder="VD:https://www.youtube.com/embed/WCCp0zbnR50"
            pattern={{
              required: "Trailer không được để trống!",
              minLength: {
                value: 6,
                message: "Độ dài trên 6 ký tự",
              },
              validate: {
                isIncludes: (value) => {
                  return value.includes("www.youtube.com") || "Invalid value";
                },
              },
            }}
          />
          <FormGroup
            name="moTa"
            label="Mô tả:"
            defaultValue={initialValues["moTa"]}
            type="textarea"
            placeholder="VD:Hey MCK, I love this stuff man. I’m an American living in Hanoi now, and if there’s ever an opportunity to meet up for a beer, I’d be honored, bro. Keep up the great work! - Jon"
            pattern={{
              required: "Mô tả không được để trống!",
              minLength: {
                value: 6,
                message: "Độ dài trên 6 ký tự",
              },
            }}
          />
          <FormGroup
            name="ngayKhoiChieu"
            label="Ngày khởi chiếu:"
            type="text"
            defaultValue={initialValues["ngayKhoiChieu"]}
            placeholder="VD:10/10/2020"
            pattern={{
              required: "Ngày khởi chiếu không được để trống!",
              pattern: {
                value: /\b(0?[1-9]|[12]\d|3[01])[\/](0[1-9]|[12]\d|3[01])[\/](\d{2}|\d{4})\b/g,
                message: "Sai định dạng",
              },
            }}
          />
          <FormGroup
            name="danhGia"
            defaultValue={initialValues["danhGia"]}
            label="Đánh giá:"
            type="number"
            placeholder="VD:10"
            pattern={{
              required: "Đánh giá không được để trống!",
              pattern: {
                value: /\b(0?[1-9])|0/i,
                message: "Sai định dạng",
              },
              validate: {
                minDanhGia: (value) => {
                  return value > 0 || "Đánh giá thấp nhất là 1";
                },
                maxDanhGia: (value) => {
                  return value <= 10 || "Đánh giá cao nhất là 10";
                },
              },
            }}
          />
          {isAdding ? (
            <FormGroup
              name="file"
              type="file"
              label="Hình ảnh:"
              pattern={{
                required: "Hình ảnh không được để trống!",
              }}
            />
          ) : (
            <React.Fragment>
              <div className="form-group">
                <img
                  src={initialValues.hinhAnh}
                  alt={initialValues.tenPhim}
                  style={{ width: "100%" }}
                />
              </div>
              {hinhAnhModal ? (
                <FormGroup
                  name="file"
                  type="file"
                  label="Hình ảnh:"
                  pattern={null}
                />
              ) : (
                <div className="form-group">
                  <a
                    className="chinhsuaHABtn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHinhAnhModal(true);
                    }}
                  >
                    Chỉnh sửa hình ảnh
                  </a>
                </div>
              )}
            </React.Fragment>
          )}

          <button type="submit">
            {isAdding ? "Add movie" : "Update movie"}
          </button>
        </form>
      </FormProvider>
    </section>
  );
}

export default FilmForm;
