export class Subscription {
  id: number;
  userId: number;
  serviceName: string;
  cost: number;
  status: string;

  constructor(id: number, userId: number, serviceName: string, cost: number, status: string) {
    this.id = id;
    this.userId = userId;
    this.serviceName = serviceName;
    this.cost = cost;
    this.status = status;
  }
}
