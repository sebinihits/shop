import { Component, OnInit } from '@angular/core';
import {DateService} from '../myservice/date.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  value;
  constructor(private ds:DateService) {
    
this.value = ds.getCurrentDate();

   }

  ngOnInit() {

    
  }

}
