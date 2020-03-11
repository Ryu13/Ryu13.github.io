import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayPageComponent } from './cosplay-page.component';

describe('CosplayPageComponent', () => {
  let component: CosplayPageComponent;
  let fixture: ComponentFixture<CosplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
