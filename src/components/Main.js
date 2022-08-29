import profileIntro from '../images/profile-intro.svg';
import addButton from '../images/addbutton.svg'
import closeIcon from '../images/CloseIcon.svg'

function Main() {

  const handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector('#popupEditAvatar')
    popupEditAvatar.classList.add('popup_opened')
  }

  const handleEditProfileClick = () => {
    const popupProfile = document.querySelector('#popupProfile')
    popupProfile.classList.add('popup_opened')
  }

  const handleAddPlaceClick = () => {
    const popupProfileImages = document.querySelector('#popupProfileImages')
    popupProfileImages.classList.add('popup_opened')
  }

  return (
    <main class="content">
      <section class="profile">
        <button type="button" class="profile__Ava-btn" onClick={handleEditAvatarClick}>
          <img src="#" alt="Жак-Ив Кусто" class="profile__logo" />
        </button>
        <div class="profile__intro">
          <div class="profile__content">
            <div class="profile__title-wrapper">
              <h1 class="profile__title">
              </h1>
              <button class="profile__edit-button" id="profileEditButton" type="button" onClick={handleEditProfileClick}>
                <img src={profileIntro} class="profile__edit-button-image"
                  alt="Редактировать" />
              </button>
            </div>
            <p class="profile__text">
            </p>
          </div>
          <button class="profile__add-button" type="button" id="profileImagesAddButton" onClick={handleAddPlaceClick}>
            <img class="profile__add-button-image" src={addButton} alt="Добавить" />
          </button>
        </div>

      </section>
      <section class="elements">

      </section>

      <div className="popup" id="popupProfile">
        <div class="popup__container" id="popupProfileContainer">

          <form class="popup__form" name="edit" novalidate id="popupEditForm">
            <h2 class="popup__text">Редактировать профиль</h2>
            <input type="text" class="popup__input" id="popupName" name="name" placeholder="Имя" value="" minlength="2"
              maxlength="40" required />
            <span class="popup__span popup__span_type_top" id="error-popupName"></span>
            <input type="text" class="popup__input" id="aboutMe" name="AboutMe" placeholder="О себе" value="" minlength="2"
              maxlength="200" required />
            <span class="popup__span popup__span_type_bottom" id="error-aboutMe"></span>
            <input type="submit" class="popup__button" value="Сохранить" name="submit" placeholder="Сохранить" disabled />
          </form>
          <button class="popup__close-button" id="popupProfileCloseButton">
            <img class="popup__close-button-image" src={closeIcon} alt="Закрыть" />
          </button>
        </div>
      </div>

      <div class="popup" id="popupProfileImages">
        <div class="popup__container">

          <form class="popup__form" name="edit" novalidate id="popupAddForm">
            <h2 class="popup__text">Новое место</h2>
            <input type="text" placeholder="Название" id="imageNameId" class="popup__input popup__input_type_imageName"
              name="title" value="" required minlength="2" maxlength="30" />
            <span class="popup__span popup__span_type_top" id="error-imageNameId"></span>
            <input type="url" placeholder="Ссылка на картинку" class="popup__input popup__input_type_link" id="imageLink"
              name="link" value="" required />
            <span class="popup__span popup__span_type_bottom" id="error-imageLink"></span>
            <input type="submit" disabled class="popup__button" value="Создать" id="popupAddButtonSubmit" name="submit"
              placeholder="Создать" />

          </form>
          <button class="popup__close-button">
            <img class="popup__close-button-image" src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" />
          </button>
        </div>
      </div>

      <div class="popup" id="popupEditAvatar" onClick={handleAddPlaceClick}>
        <div class="popup__container">


          <h2 class="popup__text">Обновить аватар</h2>
          <form class="popup__form" name="edit" id="popupEditAvatarForm" novalidate>
            <input type="url" placeholder="Ссылка на аватар" class="popup__input popup__input_type_link"
              id="popupAvatarInputText" name="link" required />
            <span class="popup__span popup__span_type_bottom" id="error-popupAvatarInputText"></span>

            <input type="submit" disabled class="popup__button" value="Сохранить" id="popipEditAvatarButton" name="submit"
              placeholder="Сохранить" />
          </form>
          <button class="popup__close-button">
            <img class="popup__close-button-image" src="<%=require('./images/CloseIcon.svg')%>" alt="Закрыть" />
          </button>
        </div>
      </div>



    </main>)
}


export default Main
