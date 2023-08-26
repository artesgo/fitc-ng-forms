import { Component, inject } from '@angular/core';
import { ControlContainer, UntypedFormArray, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  container = inject(ControlContainer);
  form = this.container.control as UntypedFormGroup;
  projects = this.form.get('projects') as UntypedFormArray;
}
