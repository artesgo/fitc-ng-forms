import { Injectable, inject, effect, untracked } from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, UntypedFormGroup, UntypedFormArray } from '@angular/forms';
import { startWith } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  builder = inject(FormBuilder);
  form = this.builder.group({
    profile: this.builder.group({
      name: new FormControl('Jinzo'),
      quote: new FormControl(`It'll be done when it's done!`),
      favourite: this.builder.group({
        game: new FormControl('Rock and Stone')
      })
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

  get profile() {
    return this.form.get('profile') as UntypedFormGroup;
  }

  get name() {
    return this.profile.get('name') as FormControl<string>;
  }

  get quote() {
    return this.profile.get('quote') as FormControl<string>;
  }

  get projects() {
    return this.form.get('projects') as UntypedFormArray;
  }

  $ = {
    name: toSignal(this.name.valueChanges.pipe(startWith(this.name.value))),
    quote: toSignal(this.quote.valueChanges.pipe(startWith(this.quote.value))),
    projects: toSignal(this.projects.valueChanges)
  }

  nameChange$ = effect(() => {
    const name = this.$.name();
    const quote = untracked(this.$.quote);
    console.log(name, quote);
  });

  projectChange$ = effect(() => {
    const projects = this.$.projects();
    console.log(projects);
  })
}