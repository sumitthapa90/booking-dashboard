import "./list.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRangePicker } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
  const location = useLocation();
  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination/Property/Name</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>

              {openDate && (
                <DateRangePicker
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label className="optionName">Option</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>Per Night</small>
                </span>
                <input type="number" className="lsOptionInput" min={1} />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>Per Night</small>
                </span>
                <input type="number" className="lsOptionInput" min={1} />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult <small>Per Night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={option.adult}
                  min={1}
                />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children <small>Per Night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={option.children}
                  min={0}
                />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room <small>Per Night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={option.room}
                  min={1}
                />
              </div>

              <button className="lsOptionBtn">Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
