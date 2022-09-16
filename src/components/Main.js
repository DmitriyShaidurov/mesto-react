import profileIntro from "../images/profile-intro.svg";
import addButton from "../images/addbutton.svg";
import App from "./App";
import Card from "./Card";

function Main(props) {
  /* const handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector('#popupEditAvatar')
    popupEditAvatar.classList.add('popup_opened')
  } */
  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__Ava-btn" onClick={props.onEditAvatar}>
          <img src={props.userAvatar} alt="Аватар" className="profile__logo" />
        </button>

        <div className="profile__intro">
          <div className="profile__content">
            <div className="profile__title-wrapper">
              <h1 className="profile__title">{props.userInfo}</h1>
              <button
                className="profile__edit-button"
                id="profileEditButton"
                type="button"
                onClick={props.onEditProfile}
              >
                <img src={profileIntro} className="profile__edit-button-image" alt="Редактировать" />
              </button>
            </div>
            <p className="profile__text">{props.userDescription}</p>
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
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
