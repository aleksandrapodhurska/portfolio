import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { BannerActionComponent } from './components/banner-action/banner-action.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CounterComponent } from './components/counter/counter.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';


@NgModule({
    declarations: [
      HomePageComponent,
      MainBannerComponent,
      BannerActionComponent,
      TestimonialsComponent,
      CounterComponent,
      AboutMeComponent,
      PortfolioComponent,
      ServicesComponent,
    ],
    imports: [
      BrowserModule,
      SharedModule,
    ],
    exports: [HomePageComponent]
  })
export class HomePageModule { }