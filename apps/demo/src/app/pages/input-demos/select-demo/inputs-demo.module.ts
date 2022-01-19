import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsDemoRoutingModule } from './inputs-demo-routing.module';
import { SelectDemoComponent } from './select-demo/select-demo.component';

@NgModule({
  declarations: [SelectDemoComponent],
  imports: [CommonModule, InputsDemoRoutingModule],
})
export class SelectDemoModule {}
