import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent {
  @Input({ required: true }) route = '';
  router = inject(Router);
  next() {
    this.router.navigate([this.route]);
  }
}
