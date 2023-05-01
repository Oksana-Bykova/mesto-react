import React from "react";
import { PopupWithForm } from "./PopupWithForm";

function AddPlacePopup(props) {
  const [nameCard, setNameCard] = React.useState();
  const [linkCard, setLinkCard] = React.useState();

  function handleNameCard(evt) {
    setNameCard(evt.target.value);
  }

  function handleLinkCard(evt) {
    setLinkCard(evt.target.value);
  }

  function handleSubmit() {
    props.onAddPlace({
      name: nameCard,
      link: linkCard,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonName={props.buttonName}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input  popup__input_type_title"
        name="name"
        id="title"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        required=""
        onChange={handleNameCard}
      />
      <span className="popup__error" id="title-error" />
      <input
        type="url"
        className="popup__input  popup__input_type_link"
        name="link"
        id="link"
        placeholder="Ссылка на картинку"
        required=""
        onChange={handleLinkCard}
      />
      <span className="popup__error" id="link-error" />
    </PopupWithForm>
  );
}

export { AddPlacePopup };
