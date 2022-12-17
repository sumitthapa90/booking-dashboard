import "./searchItem.css";
import img3 from "../../images /Dubai.jpeg";

function SearchItem() {
  return (
    <>
      <div className="searchItem">
        <img src={img3} alt="e" className="siImage" />

        <div className="siDesc">
          <h1 className="siTitle">Tower Street Appartment</h1>
          <span className="siDistance">500m From center</span>
          <span className="siTaxiDrop">Free airport Taxi</span>
          <span className="siSubTitle">Studio Appartment with ACC</span>
          <span className="siFeatures">
            Entire Studio * 1 Bathroom * 21m 1 Full bed
          </span>
          <span className="siCancilation">Free Cancellation</span>
          <span className="siCancilationSub">
            Yo can cancle latter, So lock in this great Price today
          </span>
        </div>

        <div className="siDetails">
          <div className="siRating">
            <span>Execelent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailText">
            <span className="siPrice">$123</span>
            <span className="siTaxesOpt">Include Taxes And Fair</span>
            <button className="siBtn">See Availability</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchItem;
