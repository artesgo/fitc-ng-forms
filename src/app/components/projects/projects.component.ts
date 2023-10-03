import { Component, inject } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  formService = inject(FormService);
  form = this.formService.form;
  projects = this.formService.projects;
}
