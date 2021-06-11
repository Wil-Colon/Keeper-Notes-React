import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function handleInput(input) {
    setAllNotes((prevNotes) => {
      return [...prevNotes, { title: input.title, content: input.content }];
    });
  }

  function handleDelete(id) {
    let newNotesArray = allNotes;

    const finalArray = newNotesArray.filter((note, i) => {
      return id !== i;
    });

    setAllNotes(finalArray);
  }

  function renderNotes(note, i) {
    return (
      <Note
        class="note-button"
        key={i}
        title={note.title}
        content={note.content}
        id={i}
        handleDelete={() => handleDelete(i)}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea userInput={handleInput} />
      {allNotes.map(renderNotes)}
      <Footer />
    </div>
  );
}

export default App;
