import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartlistComponent } from './shoping-cartlist.component';

describe('ShopingCartlistComponent', () => {
  let component: ShopingCartlistComponent;
  let fixture: ComponentFixture<ShopingCartlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
