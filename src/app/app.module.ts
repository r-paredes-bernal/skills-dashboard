import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectEmployeeComponent } from './components/select-employee/select-employee.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TableEmployeeComponent } from './components/table-employee/table-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchEmployeeComponent,
    SelectEmployeeComponent,
    TableEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
