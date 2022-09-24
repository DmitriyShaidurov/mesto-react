import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      name="submit"
      title="Обновить аватар"
      idForm="popupEditAvatarForm"
      id="popupEditAvatar"
      isOpen={props.isOpen}
      onClosePopup={props.onClose}
    >
      <>
        <input
          type="url"
          ref={avatarRef}
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_link"
          id="popupAvatarInputText"
          name="link"
          required
        />
        <span className="popup__span popup__span_type_bottom" id="error-popupAvatarInputText"></span>
      </>
    </PopupWithForm>
  );
}
