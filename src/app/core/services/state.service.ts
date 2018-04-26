import { Injectable } from '@angular/core';
import { LoanApplication } from '../models/loan-application.model';


@Injectable()
export class StateService {
  private loanApp: LoanApplication;
  constructor() { }

  newApp() {
    this.loanApp = new LoanApplication();
  }
  clearApp() {
    this.loanApp = null;
  }
  getApp(): LoanApplication {
    return this.loanApp;
  }

}
