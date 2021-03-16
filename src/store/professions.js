import { makeAutoObservable } from "mobx";

class Professions {
  professions = {
    1: "Директор",
    2: "Бухгалтер",
    3: "Секретарь",
    4: "Дворник",
    5: "Уборщица",
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Professions();
