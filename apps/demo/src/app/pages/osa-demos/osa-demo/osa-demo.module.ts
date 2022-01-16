import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsaDemoRoutingModule } from './osa-demo-routing.module';
import { OsaDemoComponent } from './osa-demo/osa-demo.component';
import { OsaModule } from '@universal-repo-nx/osa';


@NgModule({
  declarations: [
    OsaDemoComponent
  ],
  imports: [
    CommonModule,
    OsaModule,
    OsaDemoRoutingModule
  ]
})
export class OsaDemoModule { }
