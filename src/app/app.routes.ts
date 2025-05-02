import { Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { ProposComponent } from './core/components/propos/propos.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { TarifsComponent } from './core/components/tarifs/tarifs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tarifs', component: TarifsComponent },
    { path: 'propos', component: ProposComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
