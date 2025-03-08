import "./WarehouseDetailSection.scss";
import { P2 } from "../../components/Typography/Typography";

function WarehouseDetailSection({ warehouse }) {
  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__address">
        <h4 className="warehouse-detail__label">WAREHOUSE ADDRESS:</h4>
        <P2 className="warehouse-detail__address-content">
          <span>{warehouse.address}, </span>
          <span>
            {warehouse.city}, {warehouse.country}
          </span>
        </P2>
      </div>
      <div className="warehouse-detail__contact">
        <div className="warehouse-detail__name">
          <h4 className="warehouse-detail__label">CONTACT NAME:</h4>
          <P2>
            <p>{warehouse.contact_name}</p>
            <p>{warehouse.contact_position}</p>
          </P2>
        </div>
        <div className="warehouse-detail__infor">
          <h4 className="warehouse-detail__label">CONTACT INFORMATION:</h4>
          <P2>
            <p>{warehouse.contact_phone}</p>
            <p>{warehouse.contact_email}</p>
          </P2>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetailSection;
