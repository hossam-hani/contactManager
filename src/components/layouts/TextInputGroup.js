import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextInputGroup = ({
  text,
  placeholder,
  value,
  name,
  onChangeHandler,
  type,
  error
}) => {
  return (
    <div className="form-group">
      <label forhtml="name">{text} :</label>
      <input
        type={type}
        className={classnames("form-control", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChangeHandler}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
