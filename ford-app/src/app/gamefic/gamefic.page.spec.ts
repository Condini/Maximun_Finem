import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameficPage } from './gamefic.page';

describe('GameficPage', () => {
  let component: GameficPage;
  let fixture: ComponentFixture<GameficPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameficPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameficPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
