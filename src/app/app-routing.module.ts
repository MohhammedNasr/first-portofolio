import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {ContactMeComponent} from './contact-me/contact-me.component'
import {HomeComponent} from './home/home.component'
import {AboutMeComponent} from './about-me/about-me.component'
import {ProjectsComponent} from './projects/projects.component'
import {AllComponent} from './all/all.component'
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'aboutMe',component: AboutMeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contactMe', component: ContactMeComponent},
  {path:'all',component: AllComponent},
  {path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
