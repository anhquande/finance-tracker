import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  // Create expense
  createExpense(expense: Expense): void {
    // TODO: Implement create expense logic
  }

  // Read expense
  getExpense(id: number): Expense {
    // TODO: Implement get expense logic
    return null;
  }

  // Update expense
  updateExpense(expense: Expense): void {
    // TODO: Implement update expense logic
  }

  // Delete expense
  deleteExpense(id: number): void {
    // TODO: Implement delete expense logic
  }
}