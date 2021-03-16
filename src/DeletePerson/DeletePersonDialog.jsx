import list from "../store/list";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DeletePersonDialog(props) {
  const onSubmit = () => {
    list.deletePerson(props.id);
    props.handleClose();
  };

  const onClose = () => {
    props.handleClose();
  };

  return (
    <Dialog
      maxWidth="md"
      open={props.open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Отмена
        </Button>
        <Button onClick={onSubmit} color="primary">
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
