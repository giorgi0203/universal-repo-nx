import { Injectable } from '@nestjs/common';
import { ArticlesQuery } from './infrastructure/entities/Article.model';
import { PagingInfoCommand, PagingInfoQuery } from './infrastructure/entities/PagingInfo.model';

@Injectable()
export class AppService {
  data: any[] = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 7 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
    { id: 8 },
  ];

  getArticles(query: PagingInfoCommand): ArticlesQuery {
    let totalCount = this.data.length;
    let perPage = query.perPage;
    let pagesCount = Math.round(this.data.length / perPage);
    let currentPage = query.currentPage;
    let isLastPage = query.currentPage == pagesCount;


    const startingIndex = (currentPage - 1) * perPage;// 0 10 20 30
    const endingIndex = currentPage * perPage;// 10 20 30

    return new ArticlesQuery({
      data: this.data.slice(startingIndex, endingIndex),
      pagingInfo: {
        totalCount,
        perPage,
        isLastPage,
        pagesCount,
        currentPage,
      },
    })
  }
}
