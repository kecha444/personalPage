import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { AboutPersonComponent } from './about-person/about-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    SkillsComponent,
    WorkExpComponent,
    AboutPersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
