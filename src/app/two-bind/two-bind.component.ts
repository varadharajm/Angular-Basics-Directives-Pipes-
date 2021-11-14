import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-bind',
  templateUrl: './two-bind.component.html',
  styleUrls: ['./two-bind.component.css']
})
export class TwoBindComponent implements OnInit {

  Name: string = 'Anurag';

  constructor() { }

  ngOnInit(): void {
  }

}
