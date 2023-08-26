import { Route } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReviewComponent } from './components/review/review.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'review', component: ReviewComponent },
];
