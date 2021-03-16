import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import DeletePersonDialog from "./DeletePersonDialog";

export default function DeletePersonBtn(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Удалить сотрудника">
        <IconButton
          aria-label="Удалить сотрудника"
          onClick={() => {
            handleOpen();
          }}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
      <DeletePersonDialog
        open={open}
        handleClose={handleClose}
        title="Удалить сотрудника?"
        id={props.id}
      />
    </div>
  );
}
