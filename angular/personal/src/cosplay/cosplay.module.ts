import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { CosplayPageComponent } from './cosplay-page/cosplay-page.component';
import { GeneralModule } from 'src/general/general.module';



@NgModule({
  declarations: [CosplayPageComponent],
  imports: [
    CommonModule,
    MatExpansionModule,

    GeneralModule
  ]
})
export class CosplayModule { }
