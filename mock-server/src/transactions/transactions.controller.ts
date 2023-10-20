import { Controller, Get } from '@nestjs/common';

@Controller('transactions')
export class TransactionsController {
  @Get()
  getTransactions() {
    return [
      {
        transaction_id: 'TXN123456',
        date: '2023-10-19 14:30:45',
        description: 'Deposit',
        amount: 1000.0,
        type: 'credit',
      },
      {
        transaction_id: 'TXN123457',
        date: '2023-10-18 09:15:20',
        description: 'Withdrawal',
        amount: 250.75,
        type: 'debit',
      },
      {
        transaction_id: 'TXN123458',
        date: '2023-10-16 16:45:00',
        description: 'Online Transfer',
        amount: 300.5,
        type: 'debit',
      },
      {
        transaction_id: 'TXN123459',
        date: '2023-10-15 11:55:30',
        description: 'ATM Withdrawal',
        amount: 100.0,
        type: 'debit',
      },
    ];
  }
}
