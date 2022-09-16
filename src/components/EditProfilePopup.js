import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  return (
    <PopupWithForm
      buttonText="Сохранить"
      name="edit"
      title="Редактировать профиль"
      idForm="popupEditForm"
      id="popupProfile"
      isOpen={props.isOpen}
      onClosePopup={props.onClose}
    >
      <>
        <input
          type="text"
          className="popup__input"
          id="popupName"
          name="name"
          placeholder="Имя"
          value=""
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__span popup__span_type_top" id="error-popupName"></span>
        <input
          type="text"
          className="popup__input"
          id="aboutMe"
          name="AboutMe"
          placeholder="О себе"
          value=""
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__span popup__span_type_bottom" id="error-aboutMe"></span>
      </>
    </PopupWithForm>
  );
}
