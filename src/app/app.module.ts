import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { NavShellComponent } from './components/nav-shell/nav-shell.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillesComponent } from './components/skilles/skilles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkedinComponent,
    SkillesComponent,
    NavbarComponent,
    NavShellComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
