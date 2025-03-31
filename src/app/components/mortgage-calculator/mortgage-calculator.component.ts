import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  imports: [FormsModule, ReactiveFormsModule],
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  public loanAmount: number = 1000;
  public annualInterestRate: number = 5;
  private monthlyInterestRate: number = +((this.annualInterestRate / 100) / 12).toFixed(6);
  public loanTerm: number = 1;
  private totalNumberOfPayments: number = +(this.loanTerm * 12).toFixed(6);
  private paymentAmount: number = 0;
  private interestPaid: number = 0;
  
  constructor() {}

  getMonthlyMortgagePayment(): number {

    const numerator = +(this.loanAmount * (this.monthlyInterestRate * ((1 + this.monthlyInterestRate) ** this.totalNumberOfPayments))).toFixed(6);
    const denominator = +(((1 + this.monthlyInterestRate) ** this.totalNumberOfPayments) - 1).toFixed(6);
    const m = +(numerator / denominator).toFixed(4);
    this.paymentAmount = m * this.totalNumberOfPayments;
    this.interestPaid = this.paymentAmount - this.loanAmount;
    return m;
  }
}
