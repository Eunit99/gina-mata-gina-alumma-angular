import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SVGServerComponent } from './svg/svg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PartnersComponent } from './partners/partners.component';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { ReachOutComponent } from './reach-out/reach-out.component';






@NgModule({
  declarations: [	
    AppComponent,
    SVGServerComponent,
    NavbarComponent,
    HeaderComponent,
    HeroComponent,
    PartnersComponent,
    HomepageComponent,
    FooterComponent,
    SocialComponent,
      ReachOutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
