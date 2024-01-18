import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HomePageService } from '../../../pages/home-page/services/home-page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit, OnDestroy {
  @Input('direction') direction = 'horizontal';

  socialLinks: any;
  sub: any;

  constructor(private homepageService: HomePageService) {}

  ngOnInit(): void {
    this.sub = this.homepageService.getSocialLinks().subscribe((val) => this.socialLinks = val);
  }
  
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}


