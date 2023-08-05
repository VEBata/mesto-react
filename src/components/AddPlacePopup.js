import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const cardNameRef = React.useRef();
  const cardLinkRef = React.useRef();

  React.useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [props.isOpen]);
  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_title"
        type="text"
        required=""
        placeholder="Название"
        name="nameImg"
        id="imgName-input"
        minLength={2}
        maxLength={30}
        ref={cardNameRef}
      />
      <span className="popup__input-error" id="imgName-input-error" />
      <input
        className="popup__input popup__input_type_link" 
        type="url" 
        required=""
        placeholder='Ссылка на картинку' 
        name="linkImg" 
        id="linkImg-input"
        ref={cardLinkRef || ""}
      />
      <span className="popup__input-error" id="linkImg-input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
