import Tooltip from "component/Tooltip";
import React from "react";
import { useFormContext } from "react-hook-form";
import { VscError } from "react-icons/vsc";
import PropTypes from "prop-types";
CustomInputGroup.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  partern: PropTypes.object.isRequired,
};
function CustomInputGroup({ label, name, type, partern }) {
  const { errors, register } = useFormContext();

  // console.log(errors[name]);
  return (
    <div className="customFormGroup">
      <input
        type={type}
        id={name}
        required
        ref={register(partern)}
        name={name}
      />

      <label htmlFor={name} className="customLabel">
        {label.split("").map((item, index) => {
          return (
            <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
              {item}
            </span>
          );
        })}
      </label>
      {errors[name] && (
        <Tooltip text={errors[name].message}>
          <VscError color="red" size="2rem" />
        </Tooltip>
      )}
    </div>
  );
}

export default CustomInputGroup;
