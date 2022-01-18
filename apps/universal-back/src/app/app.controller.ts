import { ClassSerializerInterceptor, Controller, Get, Query, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { ArticlesQuery } from './infrastructure/entities/Article.model';
import { PagingInfoCommand, PagingInfoQuery } from './infrastructure/entities/PagingInfo.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getData(@Query() query: PagingInfoCommand): ArticlesQuery {
    return this.appService.getArticles(query);
  }
}
