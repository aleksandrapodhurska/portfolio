import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  sub: any;
  statistics:any;
  constructor(private homepageService: HomePageService) { }

  ngOnInit(): void {
    this.sub = this.homepageService.getStatistics().subscribe((val) => this.statistics = val);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
