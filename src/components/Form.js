import React from "react";

const Form = ({ title, settitle, desp, setdesp, notes, setNotes }) => {
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      settitle(e.target.value);
    } else {
      setdesp(e.target.value);
    }
    console.log(title, desp);
  };

  const addNoteHandler = (e) => {
    e.preventDefault();

    if (title !== "" && desp !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            title: title,
            desp: desp,
            id: new Date().getTime(),
          },
        ];
      });
    }

    settitle("");
    setdesp("");
  };
  return (
    <div>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
                backgroundColor:"#b2b7ce"
              }}
            >
              <div className="mb-3">
                <label for="description">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Enter your title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label for="discription">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Enter your description"
                  id="description"
                  value={desp}
                  onChange={inputHandler}
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={addNoteHandler}
              >
                <i class="fa-solid fa-plus me-1"></i>
                ADD NOTE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
