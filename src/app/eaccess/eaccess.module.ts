import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EaccessPageRoutingModule } from './eaccess-routing.module';

import { EaccessPage } from './eaccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EaccessPageRoutingModule
  ],
  declarations: [EaccessPage]
})
export class EaccessPageModule {}
