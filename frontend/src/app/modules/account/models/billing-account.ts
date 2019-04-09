export class BillingAccount {
  id: number;
  money: string;
  userId: number;

  constructor(id: number, money: string, userId: number) {
    this.id = id;
    this.money = money;
    this.userId = userId;
  }
}
