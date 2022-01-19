import { Validators } from '@angular/forms';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class PagingInfoQuery {
  totalCount!: number;
  perPage!: number;
  isLastPage!: boolean;
  pagesCount!: number;
  currentPage!: number;

  constructor(partial: Partial<PagingInfoQuery>) {
    Object.assign(this, partial);
  }
}

export class PagingInfoCommand {
  @IsNotEmpty()
  perPage!: number;
  @IsNotEmpty()
  currentPage!: number;

  constructor(partial: Partial<PagingInfoCommand>) {
    Object.assign(this, partial);
  }
}