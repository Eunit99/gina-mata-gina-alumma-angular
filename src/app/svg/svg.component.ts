import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-svgserver',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SVGServerComponent implements OnInit {
  @Input() id!: string;
  @Input() color!: string;
  @Input() width!: string;
  @Input() height!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getColor() {
    return this.color;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  active(name: string) {
    return this.id === name;
  }
}
