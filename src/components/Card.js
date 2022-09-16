import React from "react"


export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }



return (
    <div class="elements__element">
        <img src={props.card.link} className="elements__mask-group" alt={props.card.name} onClick={handleClick} />
        <h2 class="elements__place">{props.card.name}</h2>
        <button class="elements__deleteButton" type="button"></button>
        <div class="elements__buttonObject">

            <button class="elements__button " type="button" id="popupAddImagesButton">{props.card.likes.length}</button>
            <span class="elements__likes"></span>
        </div>
    </div>)
}