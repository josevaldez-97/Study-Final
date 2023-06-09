import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemePropListPage } from './theme-prop-list.page';

import { IonicModule } from '@ionic/angular';

import { ThemePropListPageRoutingModule } from './theme-prop-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThemePropListPageRoutingModule
  ],
  declarations: [ThemePropListPage]
})
export class ThemePropListPageModule {}
