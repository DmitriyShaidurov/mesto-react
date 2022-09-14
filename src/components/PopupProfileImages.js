import PopupWithForm from "./PopupWithForm";

export default function PopupProfileImages(props) {
    return (
        <PopupWithForm buttonText='Создать' name='edit' title='Новое место' idForm='popupAddForm' id='popupProfileImages' isOpen={props.isOpen} onClosePopup={props.onClose}>
            <>
                <input type="text" placeholder="Название" id="imageNameId" class="popup__input popup__input_type_imageName"
                    name="title" value="" required minlength="2" maxlength="30" />
                <span class="popup__span popup__span_type_top" id="error-imageNameId"></span>
                <input type="url" placeholder="Ссылка на картинку" class="popup__input popup__input_type_link" id="imageLink"
                    name="link" value="" required />
                <span class="popup__span popup__span_type_bottom" id="error-imageLink"></span>
            </>
        </PopupWithForm>
    )
}