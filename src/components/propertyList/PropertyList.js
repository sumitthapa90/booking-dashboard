import "./propertyList.css";
import img4 from "../../images /Hotels.jpg";
import img5 from "../../images /appartments.png";
import img6 from "../../images /Villas.jpg";
import img7 from "../../images /Cabin.jpg";
import img8 from "../../images /Resort.jpg";

function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={img4} alt="1" className="pListImg" />
        <div className="pListTitle">
          <h1>Hottels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={img5} alt="1" className="pListImg" />
        <div className="pListTitle">
          <h1>Appartments</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={img6} alt="1" className="pListImg" />
        <div className="pListTitle">
          <h1>Resort</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={img7} alt="1" className="pListImg" />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={img8} alt="1" className="pListImg" />
        <div className="pListTitle">
          <h1>cabin</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
