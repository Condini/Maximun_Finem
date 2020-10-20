import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FordShopPage } from './ford-shop.page';

describe('FordShopPage', () => {
  let component: FordShopPage;
  let fixture: ComponentFixture<FordShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FordShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
