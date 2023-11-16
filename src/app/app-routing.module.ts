import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'about-me', component: AboutMeComponent },
  {path:'upcoming-event',component:UpcomingEventComponent},
  { path: 'skills', component: SkillsComponent },
  { path:'professional-details',component:ProfessionalDetailsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
