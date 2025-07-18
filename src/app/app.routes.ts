import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [

  { path: '', component: Home },       // localhost:4200/
  { path: 'about', component: About }, // localhost:4200/about
  { path: 'contact', component: Contact } // localhost:4200/contact
];

