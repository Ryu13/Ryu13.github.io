import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';



@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageGalleryComponent]
})
export class GeneralModule { }
