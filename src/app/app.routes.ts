import { Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { ProposComponent } from './core/components/propos/propos.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { TarifsComponent } from './core/components/tarifs/tarifs.component';
import { noAuthGuard } from './core/guard/no-auth.guard';
import { adminGuard } from './core/guard/admin.guard';

import { AdminComponent } from './core/components/admin/admin.component';
import { DevisComponent } from './core/components/devis/devis.component';
import { AccountComponent } from './core/components/account/account/account.component';
import { HebergementComponent } from './core/components/hebergement/hebergement/hebergement.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tarifs', component: TarifsComponent },
    { path: 'propos', component: ProposComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [noAuthGuard] },
    { path: 'devis', component: DevisComponent },
    { path: 'account', component: AccountComponent },
    { path: 'hebergement', component: HebergementComponent },
    { path: 'admin', component: AdminComponent, canActivate: [adminGuard] }
];
