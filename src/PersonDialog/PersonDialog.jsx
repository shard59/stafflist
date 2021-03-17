import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import PersonDialogContent from "./PersonDialogContent";

import dialog from "./../store/dialog";

export default function PersonDialog(props) {
  const { type } = dialog;

  return (
    <Dialog
      maxWidth="md"
      open={dialog.open}
      onClose={dialog.setClose.bind(dialog)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{dialog.title}</DialogTitle>
      <PersonDialogContent type={type} />
      <DialogActions>
        <Button onClick={dialog.cancelBtnAction.bind(dialog)} color="primary">
          Отмена
        </Button>
        <Button onClick={dialog.confirmBtnAction.bind(dialog)} color="primary">
          {dialog.confirmBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
