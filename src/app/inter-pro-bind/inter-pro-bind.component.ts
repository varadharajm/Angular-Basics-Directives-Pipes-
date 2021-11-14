import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-pro-bind',
  templateUrl: './inter-pro-bind.component.html',
  styleUrls: ['./inter-pro-bind.component.css']
})
export class InterProBindComponent implements OnInit {
  title = 'ang-interpolation -- property binding';

  FirstName : string ="Varadharaj";
  LastName : string = "Mahendran";
  ImageUrl: string = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

  salary : number =10;

  FinalName: any=null;

  Name() {
    return this.FirstName +' '+this.LastName;
  }
  ImageUrl1:string ="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg";

  InDisabledClick :boolean = true;

  // malicious content example with interpolation and property binging

  MaliciousData :string = "hello <script>alert ('your application is hacked')</script>";
  constructor() { }

  ngOnInit(): void {
  }

}
