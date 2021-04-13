import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeautyComponent } from './beauty.component';

describe('BeautyComponent', () => {
  let component: BeautyComponent;
  let fixture: ComponentFixture<BeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
