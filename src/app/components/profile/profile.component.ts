import { Component, inject } from '@angular/core';
import { ControlContainer, UntypedFormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  container = inject(ControlContainer);
  router = inject(Router);
  form = this.container.control as UntypedFormGroup;
  profile = this.form.get('profile') as UntypedFormGroup;
  name = this.profile.get('name') as FormControl<string>
  next() {
    this.router.navigate(['projects']);
  }
}
