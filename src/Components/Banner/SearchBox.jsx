/* eslint-disable react/no-unknown-property */


const SearchBox = () => {
    return (
        <div className="w-1/2 py-10 mx-auto z-40">
           <form>
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300  "
  >
    Search
  </label>
  <div className="relative">
    
    <input
      type="search"
      id="default-search" // Added the "id" attribute to the input element
      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search for your College"
    />

    <button
      type="submit"
      className=" absolute right-2.5 bottom-2.5 btn-custom"
    >
      Search
    </button>
  </div>
</form>
        </div>
    );
};

export default SearchBox;