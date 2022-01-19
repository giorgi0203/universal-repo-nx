import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { delay, finalize, map, scan, shareReplay, tap } from 'rxjs/operators';
import { ArticleQuery, ArticlesQuery, PagingInfoQuery } from '@universal-repo-nx/shared-models';
@Component({
  templateUrl: './osa-demo.component.html',
  styleUrls: ['./osa-demo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsaDemoComponent implements OnInit {

  _articles: ArticleQuery[] = [];

  articles$: ReplaySubject<ArticleQuery[]> = new ReplaySubject<ArticleQuery[]>();

  articlesPagingInfo: PagingInfoQuery | undefined;
  perPage = 8;
  currentPage = 1;

  loading = true;

  constructor(private httpClient: HttpClient, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.loading = true;
    this.fetchArticles(1);

  }

  onLastScroll(e: Event) {
    console.log('next fetch');
    if (!this.articlesPagingInfo?.isLastPage) {
      this.currentPage += 1
      this.fetchArticles(this.currentPage);
    }

  }

  fetchArticles(page: number) {
    this.httpClient.get<ArticlesQuery>(`http://localhost:3333/api`, {
      params: {
        perPage: this.perPage,
        currentPage: page
      }
    }).pipe(
      delay(1000),
      tap(resp => {
        if (resp.data) {
          this._articles.push(...resp.data);
        }
        this.articles$?.next(this._articles);
        this.articlesPagingInfo = resp.pagingInfo;
      }),
      shareReplay(2),
      finalize(() => {
        this.loading = false;
        this.cd.detectChanges();
      })
    ).subscribe();
  }
}
