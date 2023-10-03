import { Component, inject } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  formService = inject(FormService);
  profile = this.formService.profile;
  name = this.profile.controls.name;
  quote = this.profile.controls.quote;
}
