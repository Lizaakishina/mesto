import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__view-image');
    this._imageDesctiption = this._popup.querySelector('.popup__description');
  }

  open({name, link}) {
    this._image.src = link;
    this._image.alt = name;
    this._imageDesctiption.textContent = name;
    super.open();
  }
}