import { Component, inject } from '@angular/core';
import { FormService } from './services/form.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  //#region 
  private formService = inject(FormService);
  form = this.formService.form;
  //#endregion
  // builder = inject(FormBuilder);
  // form = this.builder.group({
  //   profile: this.builder.group({
  //     name: new FormControl('Jinzo', [Validators.min(3)]),
  //     quote: new FormControl(`It'll be done when it's done!`, [Validators.min(8)]),
  //     favourite: this.builder.group({
  //       game: new FormControl('Rock and Stone')
  //     })
  //   }),
  //   projects: this.builder.array([
  //     this.builder.group({
  //       name: new FormControl('Music Notation'),
  //       start: new FormControl('July 2020'),
  //     }),
  //     this.builder.group({
  //       name: new FormControl('Grocery Aisle Mapper'),
  //       start: new FormControl('Sept 2022'),
  //     }),
  //   ])
  // });
}
