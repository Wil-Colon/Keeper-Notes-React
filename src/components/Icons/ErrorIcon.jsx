import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import PriorityHighRoundedIcon from "@material-ui/icons/PriorityHighRounded";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function PopUpErrorIcon(props) {
  return (
    <div>
      <Zoom
        class="form-button"
        in={true}
        style={{ transitionDelay: true ? "200ms" : "0ms" }}
      >
        <Fab>
          <PriorityHighRoundedIcon onClick={props.handleClick} />
          <Popover
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >
            <Typography sx={{ p: 2 }}>Please Enter a Note</Typography>
          </Popover>
        </Fab>
      </Zoom>
    </div>
  );
}

export default PopUpErrorIcon;
