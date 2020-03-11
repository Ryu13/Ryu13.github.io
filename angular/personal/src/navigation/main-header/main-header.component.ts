import { Component, OnInit } from '@angular/core';
import { ROUTE_MAP, AppRouteI } from 'src/app/app-routing.module';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  routes: AppRouteI[]  = [
    ROUTE_MAP.HOME,
    ROUTE_MAP.COSPLAY,
    ROUTE_MAP.GAMING,
    ROUTE_MAP.CONTACT
  ];

  constructor() { }

  ngOnInit() {
  }

}
