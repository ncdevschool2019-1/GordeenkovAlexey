import {Status} from "./status";
import {Service} from "../../catalog/models/service";

export class Sub {
  constructor(id: number, userId: number, status: Status, service: Service) {
    this.id = id;
    this.userId = userId;
    this.status = status;
    this.service = service;
  }

  id: number;
  userId: number;
  status: Status;
  service: Service;


}
