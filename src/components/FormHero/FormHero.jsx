import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import "./FormHero.scss";

function FormHero({ title }) {
  return (
    <div className="form-hero">
      <Link to="/inventory/add">
        <img src={arrowBackIcon} alt="backarrow" className="form-hero__arrow" />
      </Link>
      <h1 className="form-hero__title">{title}</h1>
    </div>
  );
}

export default FormHero;
