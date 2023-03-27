import React from "react";
import "./Form.scss";
import sidepic from "./signin-sidepic.svg";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formName?: string;
  description?: string;
  img?: boolean;
}

const Form: React.FC<FormProps> = ({
  children,
  formName,
  description,
  img,
  ...props
}) => {
  return (
    <div className="form-layout">
      <div className="form-rows">
        <div className="form-name">{formName}</div>
        {description && <div className="form-description">{description}</div>}
        <form className="form" {...props}>
          {children}
        </form>
      </div>
      {img ? <img className="form-sidepic" src={sidepic}></img> : null}
    </div>
  );
};

export default Form;
