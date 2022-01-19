import { ClassSerializerInterceptor, Controller, Get, Query, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { PagingInfoCommand, ArticlesQuery } from '@universal-repo-nx/shared-models';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getData(@Query() query: PagingInfoCommand): ArticlesQuery {
    console.log(query);
    
    return this.appService.getArticles(query);
  }
}
