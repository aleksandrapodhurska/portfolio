import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  sub: any;
  slides:any = [];

  constructor(private homepageService: HomePageService) { }

  ngOnInit(): void {
    this.sub = this.homepageService.getTestimonials().subscribe(val => this.slides = val);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
