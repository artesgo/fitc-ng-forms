import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReviewComponent } from './components/review/review.component';
import { StepProfileComponent } from './routes/step-profile/step-profile.component';
import { StepProjectsComponent } from './routes/step-projects/step-projects.component';
import { StepReviewComponent } from './routes/step-review/step-review.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { StoreModule } from '@ngrx/store';
import { ProjectComponent } from './components/projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    ReviewComponent,
    StepProfileComponent,
    StepProjectsComponent,
    StepReviewComponent,
    NavigatorComponent,
    ProjectComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
