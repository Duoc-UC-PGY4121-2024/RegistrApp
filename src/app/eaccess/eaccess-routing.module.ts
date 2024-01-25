import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EaccessPage } from './eaccess.page';

const routes: Routes = [
  {
    path: '',
    component: EaccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EaccessPageRoutingModule {}
