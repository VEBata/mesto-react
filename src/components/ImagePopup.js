const ImagePopup = ({ card, isOpen, onClose }) => {
  return (
    <div className={`popup popup-full" ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container-full">
        <button className="popup__close popup-full__close" onClick={onClose} />
        <img className="popup__img-full" src={card.link} alt={card.name} />
        <p className="popup__heading-full">{card.name}</p>
      </div>
    </div>
  );
};
export default ImagePopup;
