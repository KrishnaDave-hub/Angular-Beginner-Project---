import { Employee } from './../mock-employees';
import { Component } from '@angular/core';
import { Employees } from '../employees';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee = Employee ;
  selectedEmployee?: Employees;
  onSelect(emp:Employees):void{
    this.selectedEmployee = emp;
  }

  btnVal = "Enable"
  public toggleButon = true;

  edit(){
    if (this.toggleButon) {
      this.toggleButon = false;
      this.btnVal = "Disable"
    }else{
      this.toggleButon = true;
      this.btnVal = "Enable"
    }
  }
}
