import PopupWithForm from "./PopupWithForm";


export default function EditAvatarPopup(props) {
    
return (
    <PopupWithForm buttonText='Сохранить' name='submit' title='Обновить аватар' idForm='popupEditAvatarForm' id='popupEditAvatar' isOpen={props.isOpen} onClosePopup={props.onClose}>
        <>
        <input type="url" placeholder="Ссылка на аватар" class="popup__input popup__input_type_link"
            id="popupAvatarInputText" name="link" required />
        <span class="popup__span popup__span_type_bottom" id="error-popupAvatarInputText"></span>
        </>
    </PopupWithForm>
)
}