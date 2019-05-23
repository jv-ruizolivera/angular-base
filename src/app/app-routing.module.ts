import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/pages/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
    path: 'index',
    loadChildren: './views/home/home.module#HomeModule'
    },
    {
      path: 'home',
      loadChildren: './views/home/home.module#HomeModule'
    },
    {
      path: 'contacts',
      loadChildren: './views/contacts/contacts.module#ContactsModule'
    },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  declarations: [],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
