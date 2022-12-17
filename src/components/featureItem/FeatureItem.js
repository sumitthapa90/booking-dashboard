import "./featureItem.css";
import img9 from "../../images /Aparthotel.jpg";

function FeatureItem() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={img9} alt="d" className="fpImage" />
        <span className="fpName">Aparthotel Stare Maisto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice"> Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Execelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={img9} alt="d"  className="fpImage" />
        <span className="fpName">Aparthotel Stare Maisto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice"> Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Execelent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={img9} alt="d"  className="fpImage" />
        <span className="fpName">Aparthotel Stare Maisto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice"> Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Execelent</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
