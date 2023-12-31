import { Injectable, inject, effect, untracked, computed } from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from "rxjs";

export type ProfileForm = FormGroup<{
  name: FormControl<string | null>,
  quote: FormControl<string | null>,
  favourite: FormGroup<{
      game: FormControl<string | null>,
  }>
}>;

export type ProjectForm = FormGroup<{
  name: FormControl<string | null>;
  start: FormControl<string | null>;
}>;

@Injectable({
  providedIn: 'root'
})
export class FormService {
  builder = inject(FormBuilder);
  form: FormGroup<{
    profile: ProfileForm,
    projects: FormArray<ProjectForm>,
  }> = this.builder.group({
    profile: this.builder.group({
      name: new FormControl('Jinzo', [Validators.minLength(3)]),
      quote: new FormControl(`It'll be done when it's done!`, [Validators.minLength(8)]),
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
    return this.form.controls.profile;
  }

  get name() {
    return this.profile.controls.name;
  }

  get quote() {
    return this.profile.controls.quote;
  }

  get projects() {
    return this.form.controls.projects;
  }

  $ = {
    name: toSignal(this.name.valueChanges.pipe(startWith(this.name.value))),
    quote: toSignal(this.quote.valueChanges.pipe(startWith(this.quote.value))),
    projects: toSignal(this.projects.valueChanges),
  }

  nameChange$ = effect(() => {
    const name = this.$.name();
    const quote = untracked(this.$.quote);
    console.log(name, quote);
    console.log(this.name.errors);
  });

  projectChange$ = effect(() => {
    const projects = this.$.projects();
    console.log(projects);
  });

  profileReducer$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((form) => {
      return "Scrum Master: Hey " + form.profile?.name +
        ", when will it be done? <br />"+ form.profile?.name +
        ": " + form.profile?.quote
    })
  );

  profileReducer = computed(() => {
    return "Scrum Master: Hey " + this.$.name() +
      ", when will it be done? <br />"+ this.$.name() +
      ": " + this.$.quote()
  });
}