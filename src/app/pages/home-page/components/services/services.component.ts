import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  sub: any;
  services:any;
  constructor(private homepageService: HomePageService) { }

  ngOnInit(): void {
    this.sub = this.homepageService.getServices().subscribe((val) => this.services = val);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
