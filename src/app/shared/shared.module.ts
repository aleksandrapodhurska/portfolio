import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinksComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarouselModule
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinksComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
