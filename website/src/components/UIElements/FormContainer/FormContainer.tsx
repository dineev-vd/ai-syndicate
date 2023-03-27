import { PropsWithChildren } from "react";
import "./FormContainer.scss";

const FormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="form-container">{children}</div>;
};

export default FormContainer;
