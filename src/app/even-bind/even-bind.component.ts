import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-bind',
  templateUrl: './even-bind.component.html',
  styleUrls: ['./even-bind.component.css']
})
export class EvenBindComponent implements OnInit {

  onClick(): void {
    console.log('Buttion clicked');
    
  }

  ColumnSpan: number = 2;
    FirstName: string = 'Anurag';
    LastName: string = 'Mohanty';
    Branch: string = 'CSE';
    Mobile: number = 9876543210
    Gender: string = 'Male';
    Age: number = 20;
    
    ShowDetails: boolean = false;
    ToggleDetails(): void {
        this.ShowDetails = !this.ShowDetails;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
