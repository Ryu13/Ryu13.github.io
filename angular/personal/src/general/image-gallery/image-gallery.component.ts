import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input()
  imageRefs: any[] = [];

  @Input()
  initialCapacity: number = 10;

  @Input()
  subsequentLoadSize: number = 10;

  @Input()
  referenceKey: string;

  loadedImages: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadedImages = this.imageRefs.slice(0, this.initialCapacity);
  }

  canLoadMore(): boolean {
    return this.loadedImages.length < this.imageRefs.length;
  }

  loadMore() {
    if (this.canLoadMore()) {
      // no need to guard length
      const numImagesToLoad = this.loadedImages.length + this.subsequentLoadSize;
      this.loadedImages = this.imageRefs.slice(0, numImagesToLoad);
    }
  }

  getImageSource(imgSource) {
    return this.referenceKey ? imgSource[this.referenceKey] : imgSource;
  }

}
