import React from "react";

function Card(props) {
  const handleClick = () => {
    props.onCardClick(props.card);
    props.hendler(true);
  };

  return (
    <li className="group__element">
      <img
        className="group__image"
        alt={props.name}
        //style={{ backgroundImage: `url(${props.link})` }}
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="group__container">
        <h2 className="group__title">{props.card.name}</h2>
        <div className="group__container-like">
          <button
            className="group__button"
            type="button"
            aria-label="поставить отметку  мне нравится"
          ></button>
          <span className="group__counter-like">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="group__batton-delite"></button>
    </li>
  );
}

export { Card };
