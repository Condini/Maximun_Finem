import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionsDailyPage } from './missions-daily.page';

describe('MissionsDailyPage', () => {
  let component: MissionsDailyPage;
  let fixture: ComponentFixture<MissionsDailyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsDailyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionsDailyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
