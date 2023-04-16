import React from "react";
//import logo from './logo.svg';
//import './App.css';

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.jsx";
//import { api } from "../utils/Api.js";

function App() {
  //стейт переменные для открытия попапов, когда в них попадает тру(при нажатии на кнопку открытия попапа в компоненте Main - состояние isOpen тоже менятся на тру и попапу присваивается класс popup_opened)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

    //стейт переменная для полноразмерной картинки при клике 
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    console.log(setIsEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Место</title>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
          />
          <Footer />
        </div>
        //Попап редактирования информации
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input  popup__input_type_name"
            name="name"
            id="name"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="popup__error" id="name-error" />
          <input
            type="text"
            className="popup__input  popup__input_type_hobby"
            name="about"
            id="hobby"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span className="popup__error" id="hobby-error" />
        </PopupWithForm>
        //Попап добавления новой карточки
        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span className="popup__error" id="title-error" />
          <input
            type="url"
            className="popup__input  popup__input_type_link"
            name="link"
            id="link"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__error" id="link-error" />
        </PopupWithForm>
        //Попап подтверждения удаления карточки
        <PopupWithForm name="delete-card" title="Вы уверены?"></PopupWithForm>
        //Попап обновления фотографии в профиле
        <PopupWithForm
          name="edit-photo"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__input"
            name="avatar"
            id="link-photo"
            placeholder="Ссылка на новый аватар"
            required=""
          />
          <span className="popup__error" id="link-photo-error" />
        </PopupWithForm>
        <ImagePopup />
      </div>
    </>
  );
}

export default App;
