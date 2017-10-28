import { Component, OnInit } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'rb-listcv',
  templateUrl: './listcv.component.html',
  styleUrls: ['./listcv.component.css']
})
export class ListcvComponent implements OnInit {

  selectedCv: Cv ;


  constructor() { }

  ngOnInit() {
  }

}
