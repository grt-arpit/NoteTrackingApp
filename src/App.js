import React, { useState } from "react";
import EditModal from "./components/EditModal";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  const [title, settitle] = useState("");
  const [desp, setdesp] = useState("");
const [notes, setNotes] = useState(getNoteFromLs);
const [editid, setEditid] = useState("")

localStorage.setItem("notes",JSON.stringify(notes));

  return (
    <div>
    <Navbar/>
    <Form title={title} settitle={settitle} desp={desp} setdesp={setdesp} notes={notes} setNotes={setNotes}/>
   <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-9">
        <h1 className="mb-3">Your Notes</h1>
     {
      notes.length===0? <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Message</h5>
        <p className="card-text">
          No notes are available.Click on Add notes to create new notes
        </p>
      </div>
    </div>:notes.map((Element)=>{
      return (
        <Notes Element={Element} key={Element.id} notes={notes} setNotes={setNotes} setEditid={setEditid}/>
      )
    })
     }
      </div>
    </div>
   </div>
   <EditModal editid={editid} notes={notes} setNotes={setNotes}/>
    </div>
  );

  function getNoteFromLs(){
    const note=JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    }else{
      return [];
    }
  }

}

export default App;
