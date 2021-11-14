import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-dire',
  templateUrl: './for-dire.component.html',
  styleUrls: ['./for-dire.component.css']
})
export class ForDireComponent implements OnInit {

  employees:any[]=[];

  constructor() { 
    this.employees =[
      {
        ID: 'emp101', FirstName: 'Varadharaj', LastName: 'Mahendran',
        Branch: 'TECH', DOB: '29/02/1988', Gender: 'Male', Salary: 10000
    },
    {
    ID: 'emp102', FirstName: 'santhi', LastName: 'mahendran', 
    Branch: 'crm', DOB: '19/08/1990', Gender: 'Female', Salary: 5000
   },
    {
        ID: 'emp103', FirstName: 'Mani', LastName: 'Kandan', 
        Branch: 'TECH', DOB: '23/05/1989', Gender: 'Male', Salary: 8000
    },
    {
        ID: 'emp104', FirstName: 'Mohan', LastName: 'Sundaram', 
        Branch: 'DM', DOB: '24/07/1992', Gender: 'Male', Salary: 30000
    },
    {
      ID: 'emp105', FirstName: 'Arun', LastName: 'Arun', 
      Branch: 'TECH', DOB: '19/08/1990', Gender: 'Male', Salary: 50000
   }
    ];
  };

  getEmployees(): void {
    this.employees = [
      {
        ID: 'emp101', FirstName: 'Varadharaj', LastName: 'Mahendran',
        Branch: 'TECH', DOB: '29/02/1988', Gender: 'Male', Salary: 10000
    },
    {
    ID: 'emp102', FirstName: 'santhi', LastName: 'mahendran', 
    Branch: 'crm', DOB: '19/08/1990', Gender: 'Female', Salary: 5000
   },
    {
        ID: 'emp103', FirstName: 'Mani', LastName: 'Kandan', 
        Branch: 'TECH', DOB: '23/05/1989', Gender: 'Male', Salary: 8000
    },
    {
        ID: 'emp104', FirstName: 'Mohan', LastName: 'Sundaram', 
        Branch: 'DM', DOB: '24/07/1992', Gender: 'Male', Salary: 30000
    },
    {
      ID: 'emp105', FirstName: 'Arun', LastName: 'Arun', 
      Branch: 'TECH', DOB: '19/08/1990', Gender: 'Male', Salary: 50000
   },
   {
    ID: 'emp106', FirstName: 'pravin', LastName: 'Kumar', 
    Branch: 'crm', DOB: '19/08/1990', Gender: 'Male', Salary: 5000
   },
      {
          ID: 'emp107', FirstName: 'Kumar', LastName: 'Raj', 
          Branch: 'CRM', DOB: '12/94/1991', Gender: 'Male', Salary: 15000
      },
   
    ];
  }

  ngOnInit(): void {
  }
  public dropDownValue = "";
  SetDropDownValue(drpValue : any) {
    this.dropDownValue = drpValue.target.value;
}

AddCSSClasses(flag: string){
  let Cssclass;
  if(flag == "type1"){
    Cssclass= {
      'one':true,
      'two' : true
    }
  }else{
    Cssclass = {
      'four':true,
      'five' : true
    }
  }
  return Cssclass;
}
}
