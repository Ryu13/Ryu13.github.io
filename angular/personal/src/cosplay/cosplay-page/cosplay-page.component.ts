import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

interface GalleryBucketI {
  [year: number]: EventI[]
}

interface EventI {
  name: string,
  items: GalleryItemI[]
}

interface GalleryItemI {
  year: number,
  event: string,
  imageName: string
}

@Component({
  selector: 'app-cosplay-page',
  templateUrl: './cosplay-page.component.html',
  styleUrls: ['./cosplay-page.component.scss']
})
export class CosplayPageComponent implements OnInit {

  buckets: GalleryBucketI = {
    2013: [
      { 
        name: 'Katucon', items: [
          { year: 2013, event: 'Katuscon', imageName: 'src/assets/kirito/kirito1.JPG' },
          { year: 2013, event: 'Katuscon', imageName: 'src/assets/kirito/kirito2.JPG' },
          { year: 2013, event: 'Katuscon', imageName: 'src/assets/kirito/kirito3.JPG' }
        ] 
      }
    ],
    2019: []
  }


  constructor() { }

  ngOnInit() {
  }


  // Order by descending property key
  keyDescOrder = (a: KeyValue<number, any>, b: KeyValue<number, any>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

}
