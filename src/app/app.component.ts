import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'org';
  builder = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this.builder.group({
      profile: this.builder.group({
        name: new FormControl('Jinzo'),
        quote: new FormControl(`It'll be done when it's done!`)
      }),
      projects: this.builder.array([
        this.builder.group({
          name: new FormControl('Music Notation'),
          start: new FormControl('July 2020'),
        }),
        this.builder.group({
          name: new FormControl('Grocery Aisle Mapper'),
          start: new FormControl('Sept 2022'),
        }),
      ])
    });
  }
}
