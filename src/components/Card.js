import React from "react";

function Card(props) {
 
  
   return(
    <li class="group__element">
      <img class="group__image" alt="фото" style={{ backgroundImage: `url(${props.link})`}} />
      <div class="group__container">
        <h2 class="group__title">{props.name}</h2>
        <div class="group__container-like">
          <button
            class="group__button"
            type="button"
            aria-label="поставить отметку  мне нравится"
          ></button>
          <span class="group__counter-like">{props.likes}</span>
        </div>
      </div>
      <button class="group__batton-delite"></button>
    </li>);
  
}

export { Card };