import PopupWithForm from "./PopupWithForm";

export default function PopupProfileImages(props) {
  return (
    <PopupWithForm
      buttonText="Создать"
      name="edit"
      title="Новое место"
      idForm="popupAddForm"
      id="popupProfileImages"
      isOpen={props.isOpen}
      onClosePopup={props.onClose}
    >
      <>
        <input
          type="text"
          placeholder="Название"
          id="imageNameId"
          className="popup__input popup__input_type_imageName"
          name="title"
          value=""
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__span popup__span_type_top" id="error-imageNameId"></span>
        <input
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          id="imageLink"
          name="link"
          value=""
          required
        />
        <span className="popup__span popup__span_type_bottom" id="error-imageLink"></span>
      </>
    </PopupWithForm>
  );
}
