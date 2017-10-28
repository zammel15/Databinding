import { Component, OnInit,Input } from '@angular/core';
import {Cv} from '../cv' ;

@Component({
  selector: 'rb-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  @Input() selectedCv: Cv ;

  constructor() { }

  ngOnInit() {
  }

}
