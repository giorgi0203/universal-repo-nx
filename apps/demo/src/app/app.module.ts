import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OsaModule } from '@universal-repo-nx/osa';

@NgModule({
  declarations: [AppComponent],
  imports: [
    OsaModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: 'osa',
          loadChildren: () =>
            import('./pages/osa-demos/osa-demo/osa-demo.module').then(
              (m) => m.OsaDemoModule
            ),
        },
        {
          path: 'inputs',
          loadChildren: () =>
            import('./pages/input-demos/select-demo/inputs-demo.module').then(
              (m) => m.SelectDemoModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
