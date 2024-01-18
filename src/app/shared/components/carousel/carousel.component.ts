import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input()
  slides:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop:true,
    margin:0,
    items:1,
    autoplay:false,
    navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:true,
    dots:false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive: {
      0:{
        items:1
      },
      767:{
        items:1
      },
      992:{
        items:1
      },
      1200:{
        items:1
      },
      1500:{
        items:1
      }
    },
  }

}
