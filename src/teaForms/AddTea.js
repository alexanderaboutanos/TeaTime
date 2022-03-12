/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeaTimeApi from "../api/teaTime.api";
import Alert from "../common/Alert";

/** AddNewTea
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> AddNewTea -> Alert
 * Routed as /signup
 */

function AddNewTea() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    description: "",
    category: "",
    review: "",
    country_of_origin: "",
    organic: false,
    img_url: "",
    brew_time: null,
    brew_temp: null,
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "AddNewTea, ",
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  /** Handle form submit:
   *
   * Calls func prop and, if successful, redirect to /my-teas.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      if (formData.img_url === "") delete formData.img_url;
      if (formData.brew_time === null) delete formData.brew_time;
      if (formData.brew_temp === null) delete formData.brew_temp;
      await TeaTimeApi.createNewTeaAndAddToMyTeas(formData);
      alert("created a new tea!");
      navigate("/my-teas", { replace: true });
    } catch (errors) {
      setFormErrors(errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    console.log("EVT: ", evt);
    const target = evt.target;
    let value;
    if (target.type === "checkbox") value = target.checked;
    else if (target.type === "number") value = parseInt(target.value);
    else value = target.value;
    const name = target.name;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="AddNewTea">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Create New Tea</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Brand</label>
                <input
                  name="brand"
                  className="form-control"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Review</label>
                <input
                  name="review"
                  className="form-control"
                  value={formData.review}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Country of Origin</label>
                <input
                  name="country_of_origin"
                  className="form-control"
                  value={formData.country_of_origin}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Link to image of tea</label>
                <input
                  type="text"
                  name="img_url"
                  className="form-control"
                  value={formData.img_url}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Brew Time (in minutes)</label>
                <input
                  type="number"
                  name="brew_time"
                  className="form-control"
                  value={formData.brew_time}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Brew Temp (°F)</label>
                <input
                  type="number"
                  name="brew_temp"
                  className="form-control"
                  value={formData.brew_temp}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Organic Tea?</label>
                <input
                  type="checkbox"
                  name="organic"
                  value={formData.organic}
                  checked={formData.organic}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <button
                type="submit"
                className="btn btn-primary float-right"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTea;
