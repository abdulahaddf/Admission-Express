import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [colleges, setColleges] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://express-server-production-3274.up.railway.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Filter colleges based on searchValue
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="w-11/12 md:w-1/2 py-5 md:py-10 mx-auto z-40">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm  bg-gray-50 rounded-tl-lg border-2 border-green"
            placeholder="Search for your College"
            value={searchValue}
            onChange={handleInputChange}
          />

          <button  className="absolute right-10 bottom-2.5 btn-custom">
            Search
          </button>
        </div>
      </form>

      {/* Display filtered colleges only when there is a search value */}
      {searchValue && (
        <ul className="flex-col  bg-white p-5 space-y-3">
          {filteredColleges.map((clg) => (
            <li key={clg.id}>
              <Link  to="/details"  state= { clg } className="flex justify-between hover:underline hover:text-green">{clg.name}  <FaArrowAltCircleRight /></Link>
              
              </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
