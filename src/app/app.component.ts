import { Component, inject } from '@angular/core';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private formService = inject(FormService);
  form = this.formService.form;
}
