import { Controller, Get, Query } from '@nestjs/common';

import { AppService, IPagingInfo, IPagingInfoQuery } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query() query: IPagingInfoQuery) {
    console.log(query);

    return this.appService.getData(query);
  }
}
