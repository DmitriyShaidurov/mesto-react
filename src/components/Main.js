import profileIntro from "../images/profile-intro.svg";
import addButton from "../images/addbutton.svg";
import App from "./App";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__Ava-btn" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="Аватар" className="profile__logo" />
        </button>

        <div className="profile__intro">
          <div className="profile__content">
            <div className="profile__title-wrapper">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                id="profileEditButton"
                type="button"
                onClick={props.onEditProfile}
              >
                <img src={profileIntro} className="profile__edit-button-image" alt="Редактировать" />
              </button>
            </div>
            <p className="profile__text">{currentUser.about}</p>
          </div>

          <button
            className="profile__add-button"
            type="button"
            id="profileImagesAddButton"
            onClick={props.onEditProfileImages}
          >
            <img className="profile__add-button-image" src={addButton} alt="Добавить" />
          </button>
        </div>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
