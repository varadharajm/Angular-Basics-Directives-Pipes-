import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-bind',
  templateUrl: './att-bind.component.html',
  styleUrls: ['./att-bind.component.css']
})
export class AttBindComponent implements OnInit {

  ColumnSpan: number=2;

  pageHeader: string = 'Student Details';
  FirstName: string = 'Anurag';
  LastName: string = 'Mohanty';
  Branch: string = 'CSE';
  Mobile: number = 9876543210;
  Gender: string = 'Male';
  Age: number = 22;

  constructor() { }

  ngOnInit(): void {
  }

}
