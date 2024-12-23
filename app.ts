import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { StudentAccount } from "./class/StudentAccount";

// People Account
const people: PeopleAccount = new PeopleAccount(12345678900, "Jehymeson Gil Alves Oliveira", 1, true);
console.log(people);
console.log(people.deposit(300.8));
console.log("Seu saldo é de : R$" + people.getBalance());
console.log(people.withdraw(20.5));
console.log("Seu saldo é de : R$" + people.getBalance());
console.log(people);
console.log("---------------------------------------------------------------------------------------------");

// Companny Account
const company: CompanyAccount = new CompanyAccount("Lojinha do Sr. Zé", 2, true);
console.log(company);
console.log("Seu saldo é de : R$" + company.getBalance());
console.log(company.getLoan(100000.00));
console.log("Seu saldo é de : R$" + company.getBalance());
console.log(company);
console.log("---------------------------------------------------------------------------------------------");

// Student Account
const student: StudentAccount = new StudentAccount("Lojinha do Sr. Zé", 2, true);
console.log(student);
console.log("Seu saldo é de : R$" + student.getBalance());
console.log(student.deposit(240));
console.log("Seu saldo é de : R$" + student.getBalance());
console.log(student);