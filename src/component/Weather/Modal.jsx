import React, { Component, isValidElement, useState } from "react";

const Modal = ({ visible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(visible);
  const [city, setCity] = useState("");

  const hideModal = () => {
    setIsVisible(false);
  };

  const changeCity = (e) => {
    e.preventDefault();
    hideModal();
  };

  const setNewText = (e) => {
    setCity(e.target.value);
  };

  return (
    <div
      className={`modal fade ${visible ? "show" : ""} `}
      id="locModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="locModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="locModalLabel">
              Choose Location
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="w-form" onSubmit={changeCity}>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  onChange={setNewText}
                  value={city}
                  type="text"
                  id="city"
                  className="form-control"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={hideModal}
                >
                  Close
                </button>
                <button
                  id="w-change-btn"
                  type="submit"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
