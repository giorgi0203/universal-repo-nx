import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { OsaDirective } from './osa.directive';
import { OsaItemDirective } from './osa-item.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    OsaDirective,
    OsaItemDirective
  ],
  exports: [OsaDirective, OsaItemDirective]
})
export class OsaModule { }
