import { PracticalsComponent } from './forms/practicals/practicals.component';
import { OtherFormComponent } from './forms/other-form/other-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
  ] },
  {
    path: 'servers', component: ServersComponent, children: [
        { path: ':id', component: ServerComponent },
        { path: ':id/:edit', component: EditServerComponent }
    ]
  },

  {
    path: 'forms', component: FormsComponent, children: [
      { path: 'template-driven-form', component: TemplateDrivenComponent },
      { path: 'reactive-form', component: OtherFormComponent },
      { path: 'form-practicals', component: PracticalsComponent }
    ]
  },

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
