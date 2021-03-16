import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import EditPersonDialog from "./EditPersonDialog";
import formState from "../store/formState";
import list from "../store/list";

export default function EditPersonBtn(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const person = list.list[props.id];

  return (
    <div>
      <Tooltip title="Отредактировать запись">
        <IconButton
          aria-label="Отредактировать запись"
          onClick={() => {
            formState.editState(person);
            handleOpen();
          }}
        >
          <EditIcon color="secondary" />
        </IconButton>
      </Tooltip>
      <EditPersonDialog
        open={open}
        handleClose={handleClose}
        title="Отредактировать"
        id={props.id}
      />
    </div>
  );
}
