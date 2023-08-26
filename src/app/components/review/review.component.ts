import { Component, inject } from '@angular/core';
import { ControlContainer, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  container = inject(ControlContainer);
  router = inject(Router);
  form = this.container.control as UntypedFormGroup;
  profile = this.form.get('profile') as UntypedFormGroup;
  projects = this.form.get('projects') as UntypedFormArray;

  next() {
    this.router.navigate(['profile']);
  }
}
