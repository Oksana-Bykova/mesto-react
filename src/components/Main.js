import React from "react";
import { api } from "../utils/Api";
import { Card } from "./Card.jsx";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInformation()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
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
              
              src={userAvatar}
              alt="Фотография пользователя в профиле"
            />
          </button>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="изменить инфлрмацию профиля"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__hobby">{userDescription}</p>
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
        <ul className="group__ul">
          {cards.map((item) => (
            <Card key={item._id} 
            name = {item.name} 
            likes = {item.likes.length}  
            link = {item.link} 
            onCardClick= {props.onCardClick}
            card = {item}
            hendler = {props.hendler}
             />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
