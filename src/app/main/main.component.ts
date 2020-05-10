import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  animations: [
    trigger('textStateTrigger', [
      state('shown', style({
        opacity: 1
      })),
      state('transitioning', style({
        opacity: 0.01
      })),
      transition('shown => transitioning', animate('1500ms ease-out')),
      transition('transitioning => shown', animate('1500ms ease-in'))
    ])
  ]
})
export class MainComponent implements OnInit {
  textStateH1 = 'transitioning';
  textStateH12 = 'transitioning';
  textStateP = 'transitioning';

  constructor() { }

  ngOnInit(): void {
    // this.textState = 'shown';
    setTimeout(() => {
      this.textStateH1 = 'shown';
    }, 100);
    setTimeout(() => {
      this.textStateH12 = 'shown';
    }, 1600);
    setTimeout(() => {
      this.textStateP = 'shown';
    }, 3100);
  }

}
