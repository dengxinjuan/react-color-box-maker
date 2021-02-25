import { useState } from "react";

const NewBoxForm = ({ add }) => {
  const INITIAL_STATE = { color: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {color,width,height} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(formData);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="color"
            value={formData.color}
            id="color"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
