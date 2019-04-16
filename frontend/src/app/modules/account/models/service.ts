export class Subscription {
  private _id: number;
  private _name: string;
  private _cost: number;
  private _expireDate: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get expireDate(): number {
    return this._expireDate;
  }

  set expireDate(value: number) {
    this._expireDate = value;
  }

  constructor(id: number, name: string, cost: number, expireDate: number) {
    this._id = id;
    this._name = name;
    this._cost = cost;
    this._expireDate = expireDate;
  }
}
