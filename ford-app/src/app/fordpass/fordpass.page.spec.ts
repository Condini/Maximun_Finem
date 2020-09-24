import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FordpassPage } from './fordpass.page';

describe('FordpassPage', () => {
  let component: FordpassPage;
  let fixture: ComponentFixture<FordpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordpassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FordpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
