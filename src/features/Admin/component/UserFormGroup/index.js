import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import Tooltip from "component/Tooltip";
import { VscError } from "react-icons/vsc";
UserFormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};
function UserFormGroup({ name, type, label, pattern, defaultValue, disabled }) {
  const { errors, register } = useFormContext();
  if (type === "select") {
    return (
      <div className="userFormGroup">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} ref={register(pattern)}>
          <option value>Chọn loại người dùng</option>
          <option value="KhachHang">Khách hàng</option>
          <option value="QuanTri">Quản trị</option>
        </select>
        {errors[name] && (
          <Tooltip text={errors[name].message}>
            <VscError color="red" size="2rem" />
          </Tooltip>
        )}
      </div>
    );
  }
  return (
    <div className="userFormGroup">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        ref={register(pattern)}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {errors[name] && (
        <Tooltip text={errors[name].message}>
          <VscError color="red" size="2rem" />
        </Tooltip>
      )}
    </div>
  );
}

export default UserFormGroup;
