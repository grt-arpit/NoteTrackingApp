import React from "react";

const Notes = ({ Element, notes, setNotes, setEditid }) => {
  const removeHandler = (id) => {
    const newNotes = notes.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });
    setNotes(newNotes);
  };

  const editHandler = (id) => {
    setEditid(id);
    notes.filter((elem) => {
      if (elem.id === id) {
        document.getElementById("edittitle").value = elem.title;
        document.getElementById("editdesp").value = elem.desp;
      }
    });
  };

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{Element.title}</h5>
          <p className="card-text">{Element.desp}</p>
          <button
            type="button"
            className="btn btn-primary me-3"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
            onClick={() => {
              editHandler(Element.id);
            }}
          >
            <i className="fas fa-pen me-1"></i>
            EDIT
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              removeHandler(Element.id);
            }}
          >
            <i className="fa-solid fa-trash me-1"></i>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
