import React from 'react';

function ImagePopup() {
  return(
    <div className="popup popup_intended_photo-viewing">
    <div className="popup__container-photo">
      <img alt="фото" className="popup__photo" />
      <span className="popup__span">Карачаево-Черкессия</span>
      <button
        className="popup__close"
        type="button"
        aria-label="закрыть окно"
      />
    </div>
  </div>

  )
}

export default ImagePopup;