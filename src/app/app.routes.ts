import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'mortgage', component: MortgageCalculatorComponent }
];
