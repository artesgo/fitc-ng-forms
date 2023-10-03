import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nono',
  templateUrl: './nono.component.html',
  styleUrls: ['./nono.component.scss'],
})
export class NonoComponent implements OnInit {
  fb = inject(FormBuilder);

  // I have to initialize the form again here otherwise TS complains
  @Input({ required: true }) form: UntypedFormGroup = this.fb.group({});

  // create the child form group
  child = this.fb.group({
    appended: this.fb.control('No! God No! Noooo!', [Validators.required])
  });

  // doesn't use controls.appended to retrieve types
  get appended() {
    return this.child.get('appended') as UntypedFormControl;
  }

  ngOnInit() {
    // appends the form group to a parent form... yeah, that happens
    this.form.addControl('child', this.child);
  }
}
