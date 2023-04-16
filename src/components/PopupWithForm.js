import React from 'react';

function PopupWithForm(props) {

  /*if(!{props.isOpen}){
    document.querySelector(`'.popup_intended_${props.name}'`).classList.add("popup_opened")
  } else {
   document.querySelector(`'.popup_intended_${props.name}'`).classList.remove("popup_opened")
  } */
  
  const ClassName = `popup  popup_intended_${props.name} ${props.isOpen ? "popup_opened" : ""}`

return(
  <div className={ClassName}>



  <div className="popup__container">
    <button
      className="popup__close"
      type="button"
      aria-label="закрыть окно"
      onClick={props.onClose}
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