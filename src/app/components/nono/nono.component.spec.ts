import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonoComponent } from './nono.component';

describe('NonoComponent', () => {
  let component: NonoComponent;
  let fixture: ComponentFixture<NonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
