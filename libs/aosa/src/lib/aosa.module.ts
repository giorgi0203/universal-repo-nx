import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AosaItemDirective } from './aosa-item.directive';
import { AosaDirective } from './aosa.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AosaDirective, AosaItemDirective],
  exports: [AosaDirective, AosaItemDirective],
})
export class AosaModule { }

