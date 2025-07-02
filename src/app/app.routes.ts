import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Account } from './account/account';
import { About } from './components/about/about';
export const routes: Routes = [
  
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'account', component:Account },
    { path: '**', redirectTo: '' }   
];
