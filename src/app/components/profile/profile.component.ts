import { Component, inject } from '@angular/core';
import { ControlContainer, UntypedFormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  container = inject(ControlContainer);
  form = this.container.control as UntypedFormGroup;
  profile = this.form.get('profile') as UntypedFormGroup;
  name = this.profile.get('name') as FormControl<string>
}
