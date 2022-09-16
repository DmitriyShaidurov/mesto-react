/* import React, { useEffect } from 'react'; */
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../App.css";
import EditAvatarPopup from "./EditAvatarPopup";
import { useEffect, useState } from "react";
import closeIcon from "../images/CloseIcon.svg";
import EditProfilePopup from "./EditProfilePopup";
import PopupProfileImages from "./PopupProfileImages";
import api from "../utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isEditProfileImagesPopupOpen, setEditProfileImagesPopup] = useState(false);
  const closeAllPopups = () => {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setEditProfileImagesPopup(false);
    setImagePopup(false);
  };

  const [userAvatar, setUserAvatar] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userDescription, setUserDescription] = useState();
  const [cards, setCards] = useState([]);
  const [ImagePopup, setImagePopup] = useState(false);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        const cards = res.map((cardData) => {
          return {
            likes: cardData.likes.length,
            link: cardData.link,
            name: cardData.name,
            _id: cardData._id,
          };
        });
        setCards(cards);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
        setUserInfo(res.name);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  console.log(userDescription);
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
    setEditAvatarPopup(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopup(!isEditProfilePopupOpen);
  }

  function handleEditProfileImagesClick() {
    setEditProfileImagesPopup(!isEditProfileImagesPopupOpen);
  }

  function handleCardClick() {
    setImagePopup(!ImagePopup);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onEditProfileImages={handleEditProfileImagesClick}
        cards={cards}
        userAvatar={userAvatar}
        userDescription={userDescription}
        userInfo={userInfo}
      />
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupProfileImages isOpen={isEditProfileImagesPopupOpen} onClose={closeAllPopups} />
      {/* <ImagePopup /> */}
    </div>
  );
}

export default App;
