import React from "react";
//import logo from './logo.svg';
//import './App.css';

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.jsx";

function App() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_intended_edit-photo').classList.add("popup_opened");
  };

  function handleEditProfileClick() {
    document.querySelector('.popup_intended_edit-profile').classList.add("popup_opened");
  };

  function handleAddPlaceClick() {
    document.querySelector('.popup_intended_add-card').classList.add("popup_opened");
  }







  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Место</title>
      <div className="root">
        <div className="page">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}  onAddPlace = {handleAddPlaceClick} />
          <Footer />
        </div>
        //Попап редактирования информации
        <PopupWithForm name="edit-profile" title="Редактировать профиль">
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
        <PopupWithForm name="add-card" title="Новое место">
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
        <PopupWithForm name="edit-photo" title="Обновить аватар">
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

      <template className="card-form" />
    </>
  );
}

export default App;