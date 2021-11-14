import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent implements OnInit {

  @Input()
  all!: number;
  @Input()
  male!: number;
  @Input()
  female!: number;

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
      new EventEmitter<string>();

  onRadioButtonSelectionChange() {
      this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
