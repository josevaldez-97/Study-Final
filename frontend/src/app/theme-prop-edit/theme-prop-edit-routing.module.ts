import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemePropEditPage } from './theme-prop-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ThemePropEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemePropEditPageRoutingModule {}
