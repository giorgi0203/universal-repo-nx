import { Exclude } from 'class-transformer';
import { PagingInfoQuery } from './PagingInfo.model';

export class ArticlesQuery {
    data: any[];
    pagingInfo: PagingInfoQuery;

    constructor(partial: Partial<ArticlesQuery>) {
        Object.assign(this, partial);
    }
}

export class ArticleCommand {

    constructor(partial: Partial<ArticleCommand>) {
        Object.assign(this, partial);
    }
}