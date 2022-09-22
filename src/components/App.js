/* import React, { useEffect } from 'react'; */
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../App.css";
import EditAvatarPopup from "./EditAvatarPopup";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import PopupProfileImages from "./PopupProfileImages";
import api from "../utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isEditProfileImagesPopupOpen, setEditProfileImagesPopup] = useState(false);
  /* const [userAvatar, setUserAvatar] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userDescription, setUserDescription] = useState(""); */
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const closeAllPopups = () => {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setEditProfileImagesPopup(false);
    setSelectedCard();
  };

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setCurrentUser(res);
        /* console.log(res); */
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

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
        setCards(cards /* res  */);
        /* console.log(res); */
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  /* useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
        setUserInfo(res.name);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []); */

  function handleEditAvatarClick() {
    setEditAvatarPopup(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopup(!isEditProfilePopupOpen);
  }

  function handleEditProfileImagesClick() {
    setEditProfileImagesPopup(!isEditProfileImagesPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onEditProfileImages={handleEditProfileImagesClick}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupProfileImages isOpen={isEditProfileImagesPopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
