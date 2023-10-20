import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { TransactionsController } from './transactions/transactions.controller';

@Module({
  imports: [],
  controllers: [AppController, AccountController, TransactionsController],
  providers: [AppService],
})
export class AppModule {}
