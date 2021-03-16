import { makeAutoObservable } from "mobx";

class FormState {
  state = {
    surname: "",
    name: "",
    patronymic: "",
    position: "",
    dateOfBirth: "",
    gender: "",
    dateOfHiring: "",
    dateOfFiring: "",
    isDriver: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  handleChangeTextInput(event) {
    this.state[event.target.name] = event.target.value;
  }

  handleChangeCheck(event) {
    this.state[event.target.name] = event.target.checked;
  }

  resetForm() {
    this.state = {
      surname: "",
      name: "",
      patronymic: "",
      position: "",
      dateOfBirth: "",
      gender: "",
      dateOfHiring: "",
      dateOfFiring: "",
      isDriver: false,
    };
  }

  editState(person) {
    this.state = { ...person };
  }
}

export default new FormState();
