export class Service {
  id: number;
  cost: number;
  name: string;
  type: string;
  text: string;
  link: string;


  constructor(id: number, cost: number, name: string, type: string, text: string, link: string) {
    this.id = id;
    this.cost = cost;
    this.name = name;
    this.type = type;
    this.text = text;
    this.link = link;
  }
}
