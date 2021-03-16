import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import AddPersonDialog from "./AddPersonDialog";

export default function AddPersonBtn(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Добавить сотрудника">
        <IconButton aria-label="Добавить сотрудника" onClick={handleOpen}>
          <PersonAddSharpIcon color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
      <AddPersonDialog
        open={open}
        title="Добавить сотрудника"
        handleClose={handleClose}
      />
    </div>
  );
}
