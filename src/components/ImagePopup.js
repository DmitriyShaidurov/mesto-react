import React from "react";
import closeIcon from "../images/CloseIcon.svg";

function ImagePopup(props) {
  let popupOpened = "";
  if (props.card) {
    popupOpened = "popup_opened";
  } else {
    popupOpened = "";
  }
  const { name, link } = props.card || {};
  return (
    <div className={`popup ${popupOpened}`} id="popupImages">
      <div className="popup__container-image" id="popupImagesContainer">
        <img src={link} alt={name} className="popup__image" id="popupImagesImage" />
        <p className="popup__text-image" id="popupImagesText">
          {name}
        </p>
        <button className="popup__button-image" onClick={props.onClose}>
          <img className="popup__close-button-image" src={closeIcon} alt="Закрыть" id="popupCloseButtonImage" />
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
