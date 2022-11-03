import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { ContactComponent } from './components/contact/contact.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    component: NoteComponent,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
  {
    path: 'sign-in',
    component: SigninComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
