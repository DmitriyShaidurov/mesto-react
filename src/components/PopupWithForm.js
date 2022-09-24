import closeIcon from "../images/CloseIcon.svg";

function PopupWithForm(props) {
  let popupOpened = "";
  if (props.isOpen) {
    popupOpened = "popup_opened";
  } else {
    popupOpened = "";
  }

  return (
    <div className={`popup ${popupOpened}`} id={props.id}>
      <div className="popup__container" id="popupProfileContainer">
        <form className="popup__form" name="edit" noValidate id={props.idForm} onSubmit={props.onSubmit}>
          <h2 className="popup__text">{props.title}</h2>
          {props.children}

          <input
            type="submit"
            className="popup__button"
            value={props.buttonText}
            name={props.name}
            placeholder={props.buttonText}
            /* disabled */
          />
        </form>

        <button className="popup__close-button" onClick={props.onClosePopup} id="popupProfileCloseButton">
          <img className="popup__close-button-image" src={closeIcon} alt="Закрыть" />
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
