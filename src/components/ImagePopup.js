import React from "react"







function ImagePopup() {
    return(
        <div className="popup" id="popupImages">
        <div className="popup__container-image" id="popupImagesContainer">
          <img /* src={card.link} */ /* alt={card.name} */ className="popup__image" id="popupImagesImage" />
          <p className="popup__text-image" id="popupImagesText">{/* {card.name} */}</p>
          <button className="popup__button-image" /* onClosePopup={props.onClose} */>
            <img className="popup__close-button-image" src="" alt="Закрыть"
              id="popupCloseButtonImage" />
          </button>
        </div>
      </div>

    )
}

export default ImagePopup