import { Injectable, inject, effect, untracked } from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { startWith } from "rxjs";

type IProfileForm = FormGroup<{
  name: FormControl<string | null>,
  quote: FormControl<string | null>,
  favourite: FormGroup<{
      game: FormControl<string | null>,
  }>
}>;

type IProjectForm = FormGroup<{
  name: FormControl<string | null>;
  start: FormControl<string | null>;
}>;

@Injectable({
  providedIn: 'root'
})
export class FormService {
  builder = inject(FormBuilder);
  form: FormGroup<{
    profile: IProfileForm,
    projects: FormArray<IProjectForm>,
  }> = this.builder.group({
    profile: this.builder.group({
      name: new FormControl('Jinzo', [Validators.min(3)]),
      quote: new FormControl(`It'll be done when it's done!`, [Validators.min(8)]),
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

  // if you have a lot of child forms
  // these could be broken out into other services
  get profile() {
    return this.form.get('profile') as IProfileForm;
  }

  get name() {
    return this.profile.get('name') as FormControl<string>;
  }

  get quote() {
    return this.profile.get('quote') as FormControl<string>;
  }

  get projects() {
    return this.form.get('projects') as FormArray<IProjectForm>;
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