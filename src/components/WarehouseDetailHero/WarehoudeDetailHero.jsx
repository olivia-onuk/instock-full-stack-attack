import './WarehoudeDetailHero.scss'
import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/icons/edit-white-24px.svg"

function WarehoudeDetailHero({ id, warehouse }) {
  return (
    <div className="warehouse-hero">
    <div className="warehouse-hero__left">
      <Link to="/warehouse">
        <img src={arrowBackIcon} alt="backarrow" className="warehouse-hero__arrow" />
      </Link>
      <h1 className="warehouse-hero__title">{warehouse.warehouse_name}</h1>
    </div>
    <Link 
    to={`/warehouse/edit/${id}`}
    className="warehouse-hero__edit"
    >
      <img src={editIconWhite} alt="edit" className="warehouse-hero__edit-icon" />
      <h3 className="warehouse-hero__edit-text">Edit</h3>
    </Link>
  </div>
  )
}

export default WarehoudeDetailHero
