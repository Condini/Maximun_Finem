import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiersPage } from './tiers.page';

describe('TiersPage', () => {
  let component: TiersPage;
  let fixture: ComponentFixture<TiersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
