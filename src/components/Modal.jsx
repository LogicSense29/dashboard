import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "../styles/Modal.css"; // Add styles for your modal here

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="dashed">
          <button className="modal-close" onClick={onClose}>
            {/* &times; */}
            <HighlightOffOutlinedIcon style={{ color: "rgba(13,7,9, 0.7)" }} />
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
