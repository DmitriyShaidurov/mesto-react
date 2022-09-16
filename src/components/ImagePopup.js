import React from "react";
import closeIcon from "../images/CloseIcon.svg";

function ImagePopup(props) {
  return (
    <div className="popup popup_opened" id="popupImages">
      <div className="popup__container-image" id="popupImagesContainer">
        <img src={props.card.link} alt={props.card.name} className="popup__image" id="popupImagesImage" />
        <p className="popup__text-image" id="popupImagesText">
          {props.card.name}
        </p>
        <button className="popup__button-image" onClick={props.onClose}>
          <img className="popup__close-button-image" src={closeIcon} alt="Закрыть" id="popupCloseButtonImage" />
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
