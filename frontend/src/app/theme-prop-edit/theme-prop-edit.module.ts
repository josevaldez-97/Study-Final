import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemePropEditPage } from './theme-prop-edit.page';

import { IonicModule } from '@ionic/angular';

import { ThemePropEditPageRoutingModule } from './theme-prop-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThemePropEditPageRoutingModule
  ],
  declarations: [ThemePropEditPage]
})
export class ThemePropEditPageModule {}
