import {Status} from "./status";
import {Service} from "../../catalog/models/service";

export class Subscription {
  private _id: number;
  private _userId: number;
  private _cost: number;
  private _status: Status;
  private _service: Service;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
  }

  get service(): Service {
    return this._service;
  }

  set service(value: Service) {
    this._service = value;
  }

  constructor(id: number, userId: number, cost: number, status: Status, service: Service) {
    this._id = id;
    this._userId = userId;
    this._cost = cost;
    this._status = status;
    this._service = service;
  }
}
