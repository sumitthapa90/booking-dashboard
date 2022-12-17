import "./features.css";
import img1 from "../../images /Dublin.jpg";
import img2 from "../../images /Manchester.jpg";
import img3 from "../../images /Dubai.jpeg";

function Features() {
  return (
    <div className="features">
      <div className="feature-item">
        <img src={img1} alt="1" className="features-img" />
        <div className="featureTitle">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>

      <div className="feature-item">
        <img src={img2} alt="1" className="features-img" />
        <div className="featureTitle">
          <h1>Manchester</h1>
          <h2>113 Properties</h2>
        </div>
      </div>

      <div className="feature-item">
        <img src={img3} alt="1" className="features-img" />
        <div className="featureTitle">
          <h1>Dubai</h1>
          <h2>110 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Features;
