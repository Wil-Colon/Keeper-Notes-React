import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        style={{ color: "red", borderRadius: "105px 105px 105px 105px" }}
        onClick={props.handleDelete}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
