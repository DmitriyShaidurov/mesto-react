import closeIcon from '../images/CloseIcon.svg'

function PopupWithForm(props) {
    const popupOpened = '';
    if (props.isOpen) {
        popupOpened = 'popup_opened'
    }
    else {
        popupOpened = ''
    }


    <div className={`popup ${popupOpened}`} id={props.id}>
        <div class="popup__container" id="popupProfileContainer">

            <form class="popup__form" name="edit" novalidate id={props.idForm}>
                <h2 className="popup__text">{props.title}</h2>
                {props.children}

                <input type="submit" class="popup__button" value={props.buttonText} name={props.name} placeholder={props.buttonText} disabled />
            </form>

            <button class="popup__close-button" onClick={props.onClosePopup} id="popupProfileCloseButton">
                <img class="popup__close-button-image" src={closeIcon} alt="Закрыть" />
            </button>


        </div>
    </div>
}
