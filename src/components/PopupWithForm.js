import React from 'react';

function PopupWithForm(props) {
return(
  <div className={`popup  popup_intended_${props.name}`}>
  <div className="popup__container">
    <button
      className="popup__close"
      type="button"
      aria-label="закрыть окно"
    />
    <h2 className="popup__title">{props.title}</h2>
    <form className="popup__form" name="{props.name}" noValidate="">
     {props.children}
      <button type="submit" className="popup__button">
        Создать
      </button>
    </form>
  </div>
</div>
)
}
export  default PopupWithForm;