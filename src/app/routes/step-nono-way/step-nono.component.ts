import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-nono',
  templateUrl: './step-nono.component.html',
  styleUrls: ['./step-nono.component.scss'],
})
export class StepNonoComponent {
  fb = inject(FormBuilder);

  // if you just want to watch the world burn
  form = this.fb.group({});

  get child() {
    return this.form.get('child')?.get('appended');
  }
}
