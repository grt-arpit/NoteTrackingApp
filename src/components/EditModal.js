import React from "react";

const EditModal = ({ notes, setNotes, editid }) => {
  const updatehandler = () => {
    const updateNotes = notes.map((elem) => {
      if (editid === elem.id) {
        return( {
          ...elem,
          title: document.getElementById("edittitle").value,
          desp: document.getElementById("editdesp").value,
        });
      } else {
        return elem;
      }
    });
    console.log(updateNotes);
    setNotes(updateNotes);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3">
                <label for="description">Edit Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="edittitle"
                  aria-describedby="emailHelp"
                  placeholder="Enter your title"
                />
              </div>
              <div className="mb-3">
                <label for="discription"> Edit Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Enter your description"
                  id="editdesp"
                  rows="3"
                ></textarea>
              </div>
            </form>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-mdb-dismiss="modal"
                onClick={updatehandler}
              >
                Edit Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
