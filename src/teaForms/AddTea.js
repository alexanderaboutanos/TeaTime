/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import TeaTimeApi from "../api/teaTime.api";
import Alert from "../common/Alert";

/** AddNewTea
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to / route
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
      if (formData.img_url === "") formData.img_url = null;
      await TeaTimeApi.createNewTeaAndAddToMyTeas(formData);
      alert("created a new tea!");
      navigate("/my-teas", { replace: true });
    } catch (errors) {
      setFormErrors(errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
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
      <div className="container">
        <h2 className="mb-3" style={{ margin: "20px" }}>
          Create New Tea
        </h2>
        <p>
          <i>Please add the tea information below</i>
        </p>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">Title:</label>
                <div className="col-sm-4">
                  <input
                    placeholder="required"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">Brand:</label>
                <div className="col-sm-4">
                  <input
                    placeholder="required"
                    name="brand"
                    className="form-control"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">Description:</label>
                <div className="col-sm-10">
                  <input
                    placeholder="required"
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">Category:</label>
                <div className="col-sm-4">
                  <input
                    name="category"
                    placeholder="Black, Green, Oolong, etc."
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">
                  Country of Origin:
                </label>
                <div className="col-sm-4">
                  <input
                    name="country_of_origin"
                    className="form-control"
                    value={formData.country_of_origin}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">Review:</label>
                <div className="col-sm-10">
                  <input
                    name="review"
                    className="form-control"
                    value={formData.review}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">
                  Link to image of tea:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="img_url"
                    className="form-control"
                    value={formData.img_url}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">
                  Brew Time (min):
                </label>
                <div className="col-sm-2">
                  <input
                    type="number"
                    name="brew_time"
                    className="form-control"
                    value={formData.brew_time}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">
                  Brew Temp (°F):
                </label>
                <div className="col-sm-2">
                  <input
                    type="number"
                    name="brew_temp"
                    className="form-control"
                    value={formData.brew_temp}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row" style={{ margin: "5px" }}>
                <label className="col-sm-2 col-form-label">Organic Tea?</label>
                <div className="col-sm-1">
                  <input
                    type="checkbox"
                    name="organic"
                    value={formData.organic}
                    checked={formData.organic}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                onSubmit={handleSubmit}
              >
                Brew!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTea;
