/* import React, { useEffect } from 'react'; */
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import '../App.css';
import EditAvatarPopup from './EditAvatarPopup';
import { useEffect, useState } from 'react';
import closeIcon from '../images/CloseIcon.svg'
import EditProfilePopup from './EditProfilePopup';
import PopupProfileImages from './PopupProfileImages';
import api from '../utils/Api';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false)
  const [isEditProfileImagesPopupOpen, setEditProfileImagesPopup] = useState(false)
  const closeAllPopups = () => {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setEditProfileImagesPopup(false);
    setImagePopup(false)
  }

  const [userAvatar, setUserAvatar] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const [userDescription, setUserDescription] = useState({})
  const [cards, setCards] = useState([])
  const [ImagePopup, setImagePopup] = useState(false)

  api.getCards()
    .then(res => {
      const card = res.map((cardData) => {
        return {
          likes: cardData.likes.length,
          link: cardData.link,
          name: cardData.name
        }
      })
      console.log('card', card)
      /* setCards(card) */
    })


  /*  useEffect(() => {
     api.getCards()
     .then(res => {
       setCards(res)
     })
     .catch(err => {
       console.log('error', err)
     })
   }) */

  /* console.log(userInfo) */

  /* useEffect(() => {
    api.getProfile()
    .then(res => {
      setUserAvatar(res)
    })
    .catch(err => {
      console.log('error', err)
    })
  }) */

  /*  useEffect(() => {
      api.getProfile()
      .then(res => {
        setUserInfo(res)
      })
      .catch(err => {
        console.log('error', err)
      })
    }) */

  /*  useEffect(() => {
    api.getDescription()
    .then(res => {
      setUserInfo(res)
    })
    .catch(err => {
      console.log('error', err)
    })
  }) */


  function handleEditAvatarClick() {
    setEditAvatarPopup(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setEditProfilePopup(!isEditProfilePopupOpen)
  }

  function handleEditProfileImagesClick() {
    setEditProfileImagesPopup(!isEditProfileImagesPopupOpen)
  }

  function handleCardClick() {
    setImagePopup(!ImagePopup)
  }



  return (

    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onEditProfileImages={handleEditProfileImagesClick}
        cards={cards}
      />
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupProfileImages isOpen={isEditProfileImagesPopupOpen} onClose={closeAllPopups} />
      {/* <ImagePopup /> */}


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
            <img class="popup__close-button-image" src={closeIcon} alt="Закрыть" />
          </button>
        </div>
      </div>

      <div class="popup" id="popup_type_delete-confirm">
        <div class="popup__container">


          <h2 class="popup__text">Вы уверены?</h2>
          <form class="popup__form" name="edit" novalidate>
            <button type="submit" class="popup__button" value="Да" id="popupDeleteButton" name="submit"
              placeholder="Создать">Да</button>
          </form>
          <button class="popup__close-button">
            <img class="popup__close-button-image" src={closeIcon} alt="Закрыть" />
          </button>
        </div>
      </div>

      {/* <div class="popup" id="popupEditAvatar">
        <div class="popup__container">



          <form class="popup__form" name="edit" id="popupEditAvatarForm" novalidate>
            <h2 class="popup__text">Обновить аватар</h2>
            <input type="url" placeholder="Ссылка на аватар" class="popup__input popup__input_type_link"
              id="popupAvatarInputText" name="link" required />
            <span class="popup__span popup__span_type_bottom" id="error-popupAvatarInputText"></span>

            <input type="submit" disabled class="popup__button" value="Сохранить" id="popipEditAvatarButton" name="submit"
              placeholder="Сохранить" />
          </form>
          <button class="popup__close-button">
            <img class="popup__close-button-image" src={closeIcon} alt="Закрыть" />
          </button>
        </div>
      </div> */}

      <div class="popup" id="popupImages">
        <div class="popup__container-image" id="popupImagesContainer">
          <img src="#" alt="#" class="popup__image" id="popupImagesImage" />
          <p class="popup__text-image" id="popupImagesText"></p>
          <button class="popup__button-image">
            <img class="popup__close-button-image" src={closeIcon} alt="Закрыть"
              id="popupCloseButtonImage" />
          </button>
        </div>
      </div>



      <template id="elementTemplate">
        <div class="elements__element">
          <img src="#" class="elements__mask-group" alt="#" />
          <h2 class="elements__place">Байкал</h2>
          <button class="elements__deleteButton" type="button"></button>
          <div class="elements__buttonObject">

            <button class="elements__button " type="button" id="popupAddImagesButton"></button>
            <span class="elements__likes"></span>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
