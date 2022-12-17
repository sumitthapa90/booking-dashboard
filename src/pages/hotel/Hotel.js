import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { GoLocation } from "react-icons/go";

function Hotel() {
  const photos = [
    {
      src:
        "https://www.pexels.com/photo/bedroom-door-entrance-guest-room-271639/",
    },
    {
      src:
        "https://www.pexels.com/photo/bedroom-door-entrance-guest-room-271639",
    },
    {
      src: "https://www.pexels.com/photo/bedroom-interior-setup-271624/",
    },
    {
      src:
        "https://www.pexels.com/photo/photo-of-wine-bottle-and-food-on-table-1579253/",
    },
    {
      src:
        "https://www.pexels.com/photo/bedroom-door-entrance-guest-room-271639/",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWapper">
          <button className="bookNow"> Reserve or Book now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>

          <div className="hotelAddress">
            <GoLocation />
            <span className="hLocation">Elto Street 124 New York</span>
          </div>

          <span className="hDistance">
            Execellent Location - 500 from city center
          </span>

          <span className="hPrice">
            Book a stay over $ 125 at this property and get a free airport taxi
          </span>
          <div className="hImages">
            {photos.map((elem) => {
              return (
                <div className="hWrapper">
                  <img src={elem.src} className="hImage" />
                </div>
              );
            })}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                A hotel is an establishment that provides paid lodging on a
                short-term basis. Facilities provided inside a hotel room may
                range from a modest-quality mattress in a small room to large
                suites with bigger, higher-quality beds, a dresser, a
                refrigerator and other kitchen facilities, upholstered chairs, a
                flat screen television, and en-suite bathrooms. Small,
                lower-priced hotels may offer only the most basic guest services
                and facilities. Larger, higher-priced hotels may provide
                additional guest facilities such as a swimming pool, business
                centre (with computers, printers, and other office equipment),
                childcare, conference and event facilities, tennis or basketball
                courts, gymnasium
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1 className="hdTitle">Perfect for a 9 night stay</h1>
              <span className="hdDesc">
                A hotel is an establishment that provides paid lodging on a
                short-term basis.
              </span>
              <h2 className="hdPrice">
                <b>$678</b> 9nights
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
