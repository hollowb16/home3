import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {path: "1",component:AboutMeComponent},
  {path: "2",component:SkillComponent},
  {path: "3",component:ContactMeComponent},
  {path: "4",component:PortfolioComponent}
 
  ];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillComponent,
    ContactMeComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
