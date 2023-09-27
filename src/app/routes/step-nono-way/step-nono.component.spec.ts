import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepNonoComponent } from './step-nono.component';

describe('StepNonoComponent', () => {
  let component: StepNonoComponent;
  let fixture: ComponentFixture<StepNonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepNonoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepNonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
