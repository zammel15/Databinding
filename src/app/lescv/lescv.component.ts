import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

import {Cv} from '../cv' ;
import {CvComponent} from '../cv-item/cv.component';

@Component({
  selector: 'rb-lescv',
  templateUrl: './lescv.component.html',
  styleUrls: ['./lescv.component.css']
})
export class LescvComponent implements OnInit {

cvs: Cv[] = [] ;
@Output() cvSelected = new EventEmitter<Cv>();
cv = new Cv('zamme khalifa ','25','./assets/logo.jpg');

  constructor() { }

  ngOnInit() {
  }
onSelected(cv: Cv){
    this.cvSelected.emit(cv);

}

}
