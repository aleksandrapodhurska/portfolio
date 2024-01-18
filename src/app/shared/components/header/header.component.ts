import { Component, HostListener, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCode = faCode;
  isSticky:boolean = false;
  toSpin:boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (document.body.scrollTop > 200 ||     
      document.documentElement.scrollTop > 200) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.toSpin = true;
    setTimeout(() => {
      this.toSpin = false;
    }, 1500);
  }

  contactMe = () => {
    alert("You clicked 'Contact Me!'");
  }


}
