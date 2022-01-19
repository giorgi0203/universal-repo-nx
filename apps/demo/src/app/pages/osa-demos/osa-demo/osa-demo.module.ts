import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsaDemoRoutingModule } from './osa-demo-routing.module';
import { OsaDemoComponent } from './osa-demo/osa-demo.component';
import { AosaModule } from 'aosa';



@NgModule({
  declarations: [
    OsaDemoComponent
  ],
  imports: [
    CommonModule,
    AosaModule,
    OsaDemoRoutingModule
  ]
})
export class OsaDemoModule { }
