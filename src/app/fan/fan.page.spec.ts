import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FanPage } from './fan.page';

describe('FanPage', () => {
  let component: FanPage;
  let fixture: ComponentFixture<FanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
