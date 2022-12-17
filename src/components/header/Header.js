import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { FaBed } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { MdAttractions } from "react-icons/md";
import { MdAirportShuttle } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { VscPerson } from "react-icons/vsc";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleOption = (name, operation) => {
    setOption((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="headerList">
          <div className="headerListItems active">
            <FaBed />
            <span>Stay</span>
          </div>

          <div className="headerListItems">
            <MdOutlineFlight />
            <span>Flights</span>
          </div>

          <div className="headerListItems">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItems">
            <MdAttractions />
            <span>Attractions</span>
          </div>

          <div className="headerListItems">
            <MdAirportShuttle />
            <span>Aitrport Taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="header-description">
              Get reward for your travel - unlock instant savings of 10% or more
              with a free Booking.com Account
            </p>
            <button className="header-btn">Sing in / Register</button>
            <div className="header-search">
              <div className="headerSearchItem">
                <FaBed />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FcCalendar />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRangePicker
                    editableDateInputs={true}
                    onChange={(item) => setdate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <VscPerson />
                <span
                  onClick={() => {
                    setOpenOption(!openOption);
                  }}
                  className="headerSearchText"
                >
                  {`${option.adult} adult ${option.children} children ${option.room} room`}
                </span>

                {openOption && (
                  <div className="option">
                    <div className="option-item">
                      <span className="option-text">Adult</span>

                      <div className="option-container">
                        <button
                          disabled={option.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span>{option.adult}</span>
                        <button onClick={() => handleOption("adult", "i")}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="option-container">
                        <button
                          disabled={option.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span>{option.children}</span>
                        <button onClick={() => handleOption("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option-item">
                      <span className="option-text">Rooms</span>
                      <div className="option-container">
                        <button
                          disabled={option.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span>{option.room}</span>
                        <button onClick={() => handleOption("room", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button onClick={handleSearch} className="btn-search">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
