/** @format */
import { useState } from "react";

const SearchTea = ({ search }) => {
  const INITIAL_STATE = { search: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          placeholder="type your search here..."
          id="search"
          name="search"
          value={formData.search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchTea;
