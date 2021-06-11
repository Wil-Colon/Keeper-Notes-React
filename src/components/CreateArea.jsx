import React, { useState } from "react";
import PopUpErrorIcon from "../components/Icons/ErrorIcon";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    content: ""
  });

  const [anchorEl, setAnchorEl] = useState(null);

  function handelChange(e) {
    let { name, value } = e.target;

    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    setUserInput({ title: "", content: "" });

    userInput.content === "" || userInput.title === ""
      ? required(e)
      : props.userInput(userInput);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  function required(e) {
    setAnchorEl(e.currentTarget);
  }

  return (
    <div>
      <form class="create-note">
        <input
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={userInput.title}
        />
        <textarea
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={userInput.content}
        />
        {userInput.content === "" || userInput.title === "" ? (
          <PopUpErrorIcon
            handleClick={handleClick}
            anchorEl={anchorEl}
            handleClose={handleClose}
            id={id}
            open={open}
          />
        ) : (
          <Zoom
            class="form-button"
            in={true}
            style={{ transitionDelay: true ? "200ms" : "0ms" }}
          >
            <Fab>
              <AddIcon onClick={handleClick}> Add </AddIcon>
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
