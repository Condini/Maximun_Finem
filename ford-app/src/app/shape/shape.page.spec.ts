import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShapePage } from './shape.page';

describe('ShapePage', () => {
  let component: ShapePage;
  let fixture: ComponentFixture<ShapePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShapePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
