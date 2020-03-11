import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamingPageComponent } from './gaming-page/gaming-page.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [GamingPageComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [GamingPageComponent]
})
export class GamingModule { }
