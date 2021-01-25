import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumidifierPage } from './humidifier.page';

describe('HumidifierPage', () => {
  let component: HumidifierPage;
  let fixture: ComponentFixture<HumidifierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidifierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumidifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
