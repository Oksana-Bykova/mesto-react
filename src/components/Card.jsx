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
        alt="фото"
        //style={{ backgroundImage: `url(${props.link})` }}
        src = {props.link}
        onClick={handleClick}
      />
      <div className="group__container">
        <h2 className="group__title">{props.name}</h2>
        <div className="group__container-like">
          <button
            className="group__button"
            type="button"
            aria-label="поставить отметку  мне нравится"
          ></button>
          <span className="group__counter-like">{props.likes}</span>
        </div>
      </div>
      <button className="group__batton-delite"></button>
    </li>
  );
}

export { Card };
