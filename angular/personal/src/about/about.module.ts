import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';



@NgModule({
  declarations: [AboutMePageComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutMePageComponent]
})
export class AboutModule { }
