import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'universal-repo-nx-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
