import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  /* const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${isOwn ? "elements__deleteButton" : "elements__deleteButton_hidden"}`;
 */
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__element">
      <img src={props.card.link} className="elements__mask-group" alt={props.card.name} onClick={handleClick} />
      <h2 className="elements__place">{props.card.name}</h2>
      <button className="elements__deleteButton" /* {cardDeleteButtonClassName} */ type="button"></button>
      <div className="elements__buttonObject">
        <button className="elements__button " type="button" id="popupAddImagesButton"></button>
        <span className="elements__likes">{props.card.likes}</span>
      </div>
    </div>
  );
}
