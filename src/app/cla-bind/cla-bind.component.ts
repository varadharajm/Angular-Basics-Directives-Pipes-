import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cla-bind',
  templateUrl: './cla-bind.component.html',
  styleUrls: ['./cla-bind.component.css']
})
export class ClaBindComponent implements OnInit {

  ClassesToApply : string ='italicClass boldClass';
  ApplyBoldClass:boolean = true;
  ApplyItalicsClass: boolean= true;
  AddCSSClasses() {
    let Cssclasses = {
        boldClass: this.ApplyBoldClass,
        italicsClass: this.ApplyItalicsClass
    };
    return Cssclasses;
}
  constructor() { }

  ngOnInit(): void {
  }

}
