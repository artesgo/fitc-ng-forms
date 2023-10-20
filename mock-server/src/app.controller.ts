import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Body() body): string {
    console.log(body);
    return 'hi ';
  }

  @Get(':id')
  getOne(@Param() params: { id: string }) {
    return 'hi ' + params.id;
  }
}
