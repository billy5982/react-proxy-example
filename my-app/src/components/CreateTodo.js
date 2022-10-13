import React from "react";
const CreateBook = ({ todoBind, todoCategory, todoHandleSubmit }) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <form>
          <div className="input-group">
            <label>todo</label>
            <input type="text" {...todoBind} name="todo" placeholder="todo" />
          </div>
          <div className="input-group">
            <label>category</label>
            <input type="text" {...todoCategory} placeholder="category" />
          </div>
          <button
            className="submit-button"
            onClick={(e) => todoHandleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
