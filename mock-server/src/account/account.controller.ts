import { Controller, Get } from '@nestjs/common';

@Controller('account')
export class AccountController {
  @Get()
  getAccount() {
    return {
      account_number: '1234567890',
      account_holder: 'John Doe',
      balance: 5000.25,
      currency: 'USD',
    };
  }
}
