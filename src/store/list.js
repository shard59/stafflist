import { makeAutoObservable } from "mobx";

class List {
  keys = {
    surname: "Фамилия",
    name: "Имя",
    patronymic: "Отчество",
    position: "Должность",
    dateOfBirth: "Дата рождения",
    gender: "Пол",
    dateOfHiring: "Дата приема на работу",
    dateOfFiring: "Дата увольнения",
    isDriver: "Наличие прав",
    controls: "",
    // colleagues: "Коллеги",
  };
  list = {
    1: {
      surname: "Иванов",
      name: "Иван",
      patronymic: "Иванович",
      position: "Директор",
      dateOfBirth: "1980-01-01",
      gender: "Мужской",
      dateOfHiring: "2010-01-01",
      dateOfFiring: "",
      isDriver: true,
      // colleagues: [1, 2, 4],
    },
    2: {
      surname: "Петров",
      name: "Петр",
      patronymic: "Петрович",
      position: "Бухгалтер",
      dateOfBirth: "1990-01-01",
      gender: "Мужской",
      dateOfHiring: "2012-01-01",
      dateOfFiring: "",
      isDriver: true,
      // colleagues: [1, 2, 4],
    },
    3: {
      surname: "Алексеева",
      name: "Екатерина",
      patronymic: "Владимировна",
      position: "Секретарь",
      dateOfBirth: "1999-01-01",
      gender: "Женский",
      dateOfHiring: "2010-02-01",
      dateOfFiring: "",
      isDriver: true,
      // colleagues: [1, 2, 4],
    },
    4: {
      surname: "Ульянов",
      name: "Игорь",
      patronymic: "Иванович",
      position: "Дворник",
      dateOfBirth: "1970-01-01",
      gender: "Мужской",
      dateOfHiring: "2013-01-01",
      dateOfFiring: "2016-01-01",
      isDriver: false,
      // colleagues: [1, 2, 4],
    },
    5: {
      surname: "Дмитриченко",
      name: "Ольга",
      patronymic: "Евгениевна",
      position: "Уборщица",
      dateOfBirth: "1978-01-01",
      gender: "Женский",
      dateOfHiring: "2020-01-01",
      dateOfFiring: "",
      isDriver: false,
      // colleagues: [1, 2, 4],
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  generatePersonId() {
    const id = parseInt(Math.random() * 10000);
    return this.list[id] ? this.generatePersonId() : id;
  }

  addPerson(person) {
    const id = this.generatePersonId();
    this.list[id] = { ...person };
    this.setLocalStorage();
  }

  deletePerson(id) {
    delete this.list[id];
    this.setLocalStorage();
  }

  editPerson(id, person) {
    this.list[id] = { ...person };
    this.setLocalStorage();
  }

  getLocalStorage() {
    const storage = localStorage.getItem("staffListTestWork");
    this.list = JSON.parse(storage);
  }

  setLocalStorage() {
    localStorage.setItem("staffListTestWork", JSON.stringify(this.list));
  }
}

export default new List();
