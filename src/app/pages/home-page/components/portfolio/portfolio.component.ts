import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  sub: any;
  portfolio:any;
  constructor(private homepageService: HomePageService) { }

  ngOnInit(): void {
    this.sub = this.homepageService.getPortfolio().subscribe((val) => this.portfolio = val);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
