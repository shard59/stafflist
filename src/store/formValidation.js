import { makeAutoObservable } from "mobx";

class FormValidation {
  isValid = true;

  validationRules = {
    string: {
      regExp: /[0-9a-zA-Zа-яёА-ЯЁ]{3,}/,
      msg: "Поле обязательное, минимальная длина 3 символа",
    },
    stringGender: {
      regExp: /[0-9a-zA-Zа-яёА-ЯЁ]{3,}/,
      msg: "Поле обязательное",
    },
    date: { regExp: /[0-9]{3,}/, msg: "Поле обязательное" },
    bool: { regExp: /(true|false|1|0)/, msg: "Не верный формат" },
  };

  fieldValidStatus = {
    surname: { rule: "string", required: true },
    name: { rule: "string", required: true },
    patronymic: { rule: "string", required: false },
    position: { rule: "string", required: true },
    dateOfBirth: { rule: "date", required: true },
    gender: { rule: "stringGender", required: true },
    dateOfHiring: { rule: "date", required: true },
    dateOfFiring: {
      rule: "date",
      customRule: this.olderThenDateOfHiring,
      required: false,
    },
    isDriver: { rule: "bool", required: false },
  };

  constructor() {
    makeAutoObservable(this);
  }

  olderThenDateOfHiring(formData) {
    const hired = new Date(formData.dateOfHiring).getTime();
    const fired = new Date(formData.dateOfFiring).getTime();

    if (isNaN(fired)) return;

    return hired < fired ? "" : "Не может быть меньше даты приема на работу";
  }

  isFieldValid(formdata, required, value, rule, customRule) {
    if (customRule) {
      return customRule(formdata);
    }
    if (!value && !required) {
      return "";
    }
    if (!required) {
      return "";
    }
    return this.validationRules[rule].regExp.test(value)
      ? ""
      : this.validationRules[rule].msg;
  }

  resetFieldValidStatus() {
    Object.keys(this.fieldValidStatus).forEach((key) => {
      this.fieldValidStatus[key].msg = "";
      this.isValid = true;
    });
  }

  validateForm(formData) {
    Object.entries(formData).forEach(([name, value]) => {
      const { rule, required, customRule } = this.fieldValidStatus[name];
      const error = this.isFieldValid(
        formData,
        required,
        value,
        rule,
        customRule
      );
      if (error) {
        this.isValid = false;
      }
      this.fieldValidStatus[name].msg = error;
    });
  }
}

export default new FormValidation();
