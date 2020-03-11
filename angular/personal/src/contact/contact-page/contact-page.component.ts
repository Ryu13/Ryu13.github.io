import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*
    Avoid scrapers on static page and hopefully any source code scanners.
  */
  renderEmail() {
    return [
      'rayamada13',
      '@',
      'gmail',
      '.com'
    ].join('');
  }

}
