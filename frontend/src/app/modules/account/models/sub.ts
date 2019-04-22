import {Status} from "./status";
import {Service} from "../../catalog/models/service";

export class Sub {


  constructor(id: number, userId: number, expireDate: number, startDate: number, status: Status, service: Service) {
    this.id = id;
    this.userId = userId;
    this.expireDate = expireDate;
    this.startDate = startDate;
    this.status = status;
    this.service = service;
  }

  id: number;
  userId: number;
  expireDate: number;
  startDate: number;
  status: Status;
  service: Service;


}
