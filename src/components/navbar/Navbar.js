import "./navbar.css";
import { TbBrandBooking } from "react-icons/tb";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <div className="flex">
            <div className="logo">
              <TbBrandBooking className="logo-info" />
            </div>
            <div>
              <h2>Booking.com</h2>
            </div>
          </div>
        </Link>

        <div className="nav-items">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Sing In</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
