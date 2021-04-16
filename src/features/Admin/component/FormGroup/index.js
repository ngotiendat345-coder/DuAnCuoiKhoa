import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

function FormGroup({ label, name, pattern, placeholder, type, defaultValue }) {
  const { errors, register } = useFormContext();
  //console.log(errors);
  if (type === "file") {
    return (
      <div className="form-group fileAnh">
        <label htmlFor="file">Hình ảnh:</label>
        <input type="file" name="file" id="file" ref={register(pattern)} />
        {errors[name] && (
          <small style={{ color: "red", margin: "0.5rem 0" }}>
            <FaExclamationCircle />
            {errors[name].message}
          </small>
        )}
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="form-group">
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            rows="4"
            ref={register(pattern)}
            defaultValue={defaultValue}
          />
        </div>
        {errors[name] && (
          <small style={{ color: "red", margin: "0.5rem 0" }}>
            <FaExclamationCircle />
            {errors[name].message}
          </small>
        )}
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          ref={register(pattern)}
          defaultValue={defaultValue}
        />
        {errors[name] && (
          <small style={{ color: "red", margin: "0.5rem 0" }}>
            <FaExclamationCircle />
            {errors[name].message}
          </small>
        )}
      </div>
    </React.Fragment>
  );
}

export default FormGroup;
