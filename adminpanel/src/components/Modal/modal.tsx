import React from "react";
import "./modal.css";

const Modal = ({
  active,
  setActive,
  children,
}: {
  active: boolean;
  setActive: (arg0: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
