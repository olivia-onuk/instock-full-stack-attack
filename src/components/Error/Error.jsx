import "./Error.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

function Error({error, errorItem}) {
  return (
    <p
      className={`inventory-form__error-text ${
        error && !errorItem ? "inventory-form__error-text--visible" : ""
      }`}
    >
      <img
        className="inventory-form__error-text--img"
        src={errorIcon}
        alt="error"
      />
      This field is required
    </p>
  );
}

export default Error;
