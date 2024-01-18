import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {
  @Input()
  text = '';
  @Input()
  public clickFunction!: (args: any) => void;

  @HostListener('click')
  clickHandler(args: any) {
    this.clickFunction(args);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
