import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number, status: boolean) {
    super(name, accountNumber, status);
  }

  deposit = (value: number): string => {
    if (this.getStatus()) {
      this.setBalance(value + 10);
      return "Deposito realizado com sucesso!";
    }

    throw new Error("Erro ao realizar deposito!");
  };
}
