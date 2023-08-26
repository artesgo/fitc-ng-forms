import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepProjectsComponent } from './step-projects.component';

describe('StepProjectsComponent', () => {
  let component: StepProjectsComponent;
  let fixture: ComponentFixture<StepProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
