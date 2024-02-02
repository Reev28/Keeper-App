import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import React, { useState } from "react";
import notes from "../notes";
import CreateArea from "./CreateArea";


console.log(notes);

function App() {
  const [allNotes, setAllNotes] = useState([]);
  function handleAdd(newNote) {
    setAllNotes((prevNotes) => {
      return [...prevNotes, newNote]


    })
    console.log(allNotes);
  }

  function handleDelete(id) {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })


    })
    console.log(allNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {allNotes.map((noteItem, index) => (< Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={handleDelete} />))}

      {/* {notes.map((noteItem) => (< Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />))} */}
      <Footer />
    </div>
  );
}

export default App;
