import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
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
          onChange={handleChangeName}
          id="popupName"
          name="name"
          placeholder="Имя"
          value={name}
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__span popup__span_type_top" id="error-popupName"></span>
        <input
          type="text"
          className="popup__input"
          onChange={handleChangeDescription}
          id="aboutMe"
          name="AboutMe"
          placeholder="О себе"
          value={description}
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__span popup__span_type_bottom" id="error-aboutMe"></span>
      </>
    </PopupWithForm>
  );
}
