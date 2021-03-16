import formState from "./../store/formState";
import list from "./../store/list";
import formValidation from "./../store/formValidation";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PersonForm from "./../PersonForm/PersonForm";

export default function AddPerson(props) {
  const onSubmit = () => {
    formValidation.resetFieldValidStatus();

    formValidation.validateForm(formState.state);
    if (formValidation.isValid) {
      list.addPerson(formState.state);
      formState.resetForm();
      props.handleClose();
    }
  };

  return (
    <Dialog
      maxWidth="md"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <PersonForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Отмена
        </Button>
        <Button onClick={onSubmit} color="primary">
          Добавить сотрудника
        </Button>
      </DialogActions>
    </Dialog>
  );
}
