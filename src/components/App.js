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
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const closeAllPopups = () => {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setEditProfileImagesPopup(false);
    setSelectedCard();
  };

  function handleUpdateUser(e) {
    api
      .editProfile(e)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function handleSubmitAvatar(e) {
    api
      .editAvatar(e)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function handleAddPlaceSubmit(e) {
    console.log(e);
    api
      .addNewCard(e)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.addLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });

    api.deleteLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((cards) => cards.filter((item) => item._id !== card._id));
    });
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
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleSubmitAvatar} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopupProfileImages
          isOpen={isEditProfileImagesPopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
