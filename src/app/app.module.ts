import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttBindComponent } from './att-bind/att-bind.component';
import { InterProBindComponent } from './inter-pro-bind/inter-pro-bind.component';
import { ClaBindComponent } from './cla-bind/cla-bind.component';
import { EvenBindComponent } from './even-bind/even-bind.component';
import { TwoBindComponent } from './two-bind/two-bind.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { ForDireComponent } from './for-dire/for-dire.component';
import { MyTitlePipe } from './my-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AttBindComponent,
    InterProBindComponent,
    ClaBindComponent,
    EvenBindComponent,
    TwoBindComponent,
    StudentListComponent,
    StudentCountComponent,
    ForDireComponent,
    MyTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
