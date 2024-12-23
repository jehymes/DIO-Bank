import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, status: boolean) {
    super(name, accountNumber, status);
  }

  getLoan = (value: number): string => {
    if (this.getStatus()) {
      this.setBalance(value);
      return "Emprestimo realizado com sucesso. Saldo já disponível em conta!";
    }

    throw new Error("Erro ao solicitar emprestimo!");
  };

  deposit = (): string => {
    return "A empresa depositou!";
  };
}
