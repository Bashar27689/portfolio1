import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { NavShellComponent } from './components/nav-shell/nav-shell.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skilles/skills.component';

const navbarRoutes: Routes = [
  {path:'', redirectTo:'/home-page', pathMatch:'full'},
 
  {path:'home-page', component:HomeComponent},
 
  {path:'linkedin-page', component:LinkedinComponent},

  {path:'skills-page', component:SkillsComponent},

  {path: 'contact-page', component:ContactComponent},

  {path:'projects-page', component:ProjectsComponent},

];

const routes: Routes = [
  { path: '', component: NavShellComponent, children: navbarRoutes },
  {path:'home-page', component:HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
