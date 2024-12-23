export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number, status: boolean) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.status = status;
  }

  setBalance = (value: number): void => {
    let balanceMemory = this.balance;
    this.balance = value + balanceMemory;
  };

  setStatus = (status: boolean): void => {
    this.status = status;
  };

  getStatus = (): boolean => {
    return this.status;
  };

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  getBalance = (): number => {
    return this.balance;
  };

  deposit = (value: number): string => {
    if (this.validateStatus()) {
      this.balance += value;
      return "Deposito realizado com sucesso!";
    }

    throw new Error("Não foi possível realizar o deposito!");
  };

  withdraw = (value: number): string => {
    if (this.validateStatus() && this.balance > value) {
      this.balance -= value;
      return "Saque realizado com sucesso!";
    }

    throw new Error("Não foi possível realizar o saque!");
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
