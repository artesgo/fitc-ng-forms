import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StepProfileComponent } from './routes/step-profile/step-profile.component';
import { StepProjectsComponent } from './routes/step-projects/step-projects.component';
import { StepReviewComponent } from './routes/step-review/step-review.component';
import { StepNonoComponent } from './routes/step-nono-way/step-nono.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { NonoComponent } from './components/nono/nono.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    StepNonoComponent,
    StepProfileComponent,
    StepProjectsComponent,
    StepReviewComponent,
    NavigatorComponent,
    ProjectComponent,
    ProjectComponent,
    NonoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
