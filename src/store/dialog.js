import { makeAutoObservable } from "mobx";

import formValidation from "./formValidation";
import formState from "./formState";
import list from "./list";

class Dialog {
  open = false;
  type = "";
  personId = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setOpen() {
    this.open = true;
  }

  setClose() {
    this.open = false;
  }

  setType(type) {
    this.type = type;
  }

  setPersonId(id) {
    this.personId = id;
  }

  get title() {
    if (this.type === "add") return "Добавить сотрудника";
    if (this.type === "edit") return "Отредактировать запись";
    if (this.type === "delete") return "Удалить сотрудника";
    return "";
  }

  get confirmBtnText() {
    if (this.type === "add") return "Добавить сотрудника";
    if (this.type === "edit") return "Отредактировать данные";
    if (this.type === "delete") return "Удалить сотрудника";
    return "";
  }

  get confirmBtnAction() {
    if (this.type === "add") return this.addPersonConfirm;
    if (this.type === "edit") return this.editPersonConfirm;
    if (this.type === "delete") return this.deletePersonConfirm;
    return this.setClose;
  }

  get cancelBtnAction() {
    if (this.type === "add") return this.personFormCancel;
    if (this.type === "edit") return this.personFormCancel;
    if (this.type === "delete") return this.deletePersonCancel;
    return this.setClose;
  }

  addPersonConfirm() {
    formValidation.resetFieldValidStatus();

    formValidation.validateForm(formState.state);
    if (formValidation.isValid) {
      list.addPerson(formState.state);
      formState.resetForm();
      this.setClose();
    }
  }

  personFormCancel() {
    formValidation.resetFieldValidStatus();
    formState.resetForm();
    this.setClose();
  }

  editPersonConfirm() {
    formValidation.resetFieldValidStatus();

    formValidation.validateForm(formState.state);
    if (formValidation.isValid) {
      list.editPerson(this.personId, formState.state);
      formState.resetForm();
      this.setClose();
    }
  }

  deletePersonConfirm() {
    list.deletePerson(this.personId);
    this.setClose();
  }

  deletePersonCancel() {
    this.setClose();
  }
}

export default new Dialog();
