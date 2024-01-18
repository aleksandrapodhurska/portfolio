import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-action',
  templateUrl: './banner-action.component.html',
  styleUrls: ['./banner-action.component.scss']
})
export class BannerActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  discuss = () => {
    alert("You clicked 'Let's Discuss!'");
  }
}
