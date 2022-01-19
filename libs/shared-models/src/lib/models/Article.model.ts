import { Exclude } from 'class-transformer';
import { PagingInfoQuery } from './PagingInfo.model';

export class ArticlesQuery {
    data: ArticleQuery[] | undefined;
    pagingInfo: PagingInfoQuery | undefined;

    constructor(partial: Partial<ArticlesQuery>) {
        Object.assign(this, partial);
    }
}

export class ArticleQuery {
    id: number | undefined;
    title: string | undefined;
    content: string | undefined;

    constructor(partial: Partial<ArticleQuery>) {
        Object.assign(this, partial);
    }
}

export class ArticleCommand {

    constructor(partial: Partial<ArticleCommand>) {
        Object.assign(this, partial);
    }
}