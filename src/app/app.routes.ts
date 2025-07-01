import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Account } from './account/account';
export const routes: Routes = [
  
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'account', component:Account },
    { path: '**', redirectTo: '' }   
];
