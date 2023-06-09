import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemePropListPage } from './theme-prop-list.page';

const routes: Routes = [
  {
    path: '',
    component: ThemePropListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemePropListPageRoutingModule {}
