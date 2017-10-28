import { Component, OnInit , Input } from '@angular/core';
import {Cv} from '../cv' ;
@Component({
  selector: 'rb-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
    @Input()    cv:Cv;
cvId: number;


  constructor() { }

  ngOnInit() {
  }

}
