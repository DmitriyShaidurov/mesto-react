import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
    return (
        <PopupWithForm buttonText='Сохранить' name='edit' title='Редактировать профиль'
            idForm='popupEditForm' id='popupProfile'
            isOpen={props.isOpen} onClosePopup={props.onClose}>
            <>
            <input type="text" class="popup__input" id="popupName" name="name" placeholder="Имя" value="" minlength="2"
              maxlength="40" required />
            <span class="popup__span popup__span_type_top" id="error-popupName"></span>
            <input type="text" class="popup__input" id="aboutMe" name="AboutMe" placeholder="О себе" value="" minlength="2"
              maxlength="200" required />
            <span class="popup__span popup__span_type_bottom" id="error-aboutMe"></span>
            </>
        </PopupWithForm>
    )
}