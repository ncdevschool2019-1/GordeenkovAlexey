import {Type} from "../../catalog/models/Type";

export class Service {
  id: number;
  cost: number;
  name: string;
  text: string;
  link: string;
  type: Type;


  constructor(id: number, cost: number, name: string, text: string, link: string, type: Type) {
    this.id = id;
    this.cost = cost;
    this.name = name;
    this.text = text;
    this.link = link;
    this.type = type;
  }
}
