import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {

  @Input() className: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
