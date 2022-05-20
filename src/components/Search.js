import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
export const Search = ({ data }) => {
  const ref = useRef();
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState([]);

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setInput(searchValue);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setInput("");
  };

  useEffect(() => {
    const handleClose = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (filteredData && ref.current && !ref.current.contains(e.target)) {
        setFilteredData([]);
      }
    };

    document.addEventListener("click", handleClose);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handleClose);
    };
  }, [filteredData]);

  return (
    <div className="search text-gray-900" ref={ref}>
      <div className="searchInputs flex">
        <input
          className="border-0 p-4 h-7 max-w-sm focus:outline-0"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={input}
        />
        <div className="bg-white grid place-items-center">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className="cursor-pointer" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResults bg-white w-60 absolute overflow-hidden overflow-y-auto">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <Link
                to={`/product/${value.id}`}
                key={value.id}
                onClick={() => {
                  setFilteredData([]);
                  setInput("");
                }}
              >
                <div className="py-4 px-2 hover:bg-gray-200 flex place-items-center">
                  <img src={value.img} className="h-[100px] mr-2" />
                  <p>{value.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
