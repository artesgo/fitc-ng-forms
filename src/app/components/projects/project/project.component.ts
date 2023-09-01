import { Component, Input } from '@angular/core';
import { ProjectForm } from '../../../services/form.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  private _project: ProjectForm | undefined;
  @Input({ required: true }) index = 0;
  @Input({ required: true }) set project(val: ProjectForm) {
    this._project = val;
  };
  get project() {
    return this._project as ProjectForm;
  }
}
