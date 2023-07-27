import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  convertedStyle = {
    color: "#768497 !important",
    fontFamily: '"Average Sans" !important',
    textAlign: "center !important",
    fontSize: "0.85869rem !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "1.65525rem !important",
    padding: "1.32419rem 0.88281rem !important",
    alignItems: "center !important",
    borderRadius: "0.11038rem !important",
    background: "#FFF !important",
    boxShadow:
      "0px 2px 3px 0px rgba(0, 0, 0, 0.05), 0px 6px 10px 4px rgba(243, 248, 245, 0.15) !important",
    textDecoration: "none"
  }

  getFaqStyle = () => {
    return this.convertedStyle;
  }
}
