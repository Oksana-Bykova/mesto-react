import React from 'react';
 
 function Main(props) {

  

return(
  <main>
      <section className="profile root__section">
        <div className="profile__container">
          <button
            className="profile__edit-photo-button"
            type="button"
            aria-label="изменить фотографию профиля"
            onClick={props.onEditAvatar}
          >
            <img
              className="profile__image"
              src="<%=require('./images/image.jpg')%>"
              alt="Фотография пользователя в профиле"
            />
          </button>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title" />
              <button
                className="profile__edit-button"
                type="button"
                aria-label="изменить инфлрмацию профиля"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__hobby" />
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить новую фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="group">
        <ul className="group__ul"></ul>
      </section>
    </main>
)

 }

 export default Main;