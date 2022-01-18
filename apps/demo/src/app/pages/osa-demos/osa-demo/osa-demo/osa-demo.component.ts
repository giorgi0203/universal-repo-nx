import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './osa-demo.component.html',
  styleUrls: ['./osa-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsaDemoComponent implements OnInit {
  items: {
    id: number;
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.items.push({
        id: Math.random(),
      });
    }
  }
}
