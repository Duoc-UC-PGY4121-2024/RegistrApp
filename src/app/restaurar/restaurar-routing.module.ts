import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurarPage } from './restaurar.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurarPageRoutingModule {}
