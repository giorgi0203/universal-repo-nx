import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsaDemoComponent } from './osa-demo/osa-demo.component';

const routes: Routes = [
  {
    path: '',
    component: OsaDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsaDemoRoutingModule {}
