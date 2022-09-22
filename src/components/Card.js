import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${isOwn ? "elements__deleteButton" : "elements__deleteButton_hidden"}`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `${isLiked ? "elements__button_like_active" : "elements__button"}`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__element">
      <img src={props.card.link} className="elements__mask-group" alt={props.card.name} onClick={handleClick} />
      <h2 className="elements__place">{props.card.name}</h2>
      <button className={cardDeleteButtonClassName} type="button"></button>
      <div className="elements__buttonObject">
        <button className={cardLikeButtonClassName} type="button" id="popupAddImagesButton"></button>
        <span className="elements__likes">{props.card.likes.length}</span>
      </div>
    </div>
  );
}
