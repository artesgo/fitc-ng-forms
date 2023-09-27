import { Route } from '@angular/router';
import { StepProfileComponent } from './routes/step-profile/step-profile.component';
import { StepProjectsComponent } from './routes/step-projects/step-projects.component';
import { StepReviewComponent } from './routes/step-review/step-review.component';
import { StepNonoComponent } from './routes/step-nono-way/step-nono.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: StepProfileComponent },
  { path: 'projects', component: StepProjectsComponent },
  { path: 'review', component: StepReviewComponent },
  { path: 'nono', component: StepNonoComponent },
];
