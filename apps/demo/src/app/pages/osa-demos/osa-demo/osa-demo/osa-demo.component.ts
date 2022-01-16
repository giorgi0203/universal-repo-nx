import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './osa-demo.component.html',
  styleUrls: ['./osa-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OsaDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
