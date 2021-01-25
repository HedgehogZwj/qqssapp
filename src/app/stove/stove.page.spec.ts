import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StovePage } from './stove.page';

describe('StovePage', () => {
  let component: StovePage;
  let fixture: ComponentFixture<StovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
