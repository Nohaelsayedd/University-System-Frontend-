import { Component, OnInit } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentName: string = '';
  students = [
    { id: '123456', name: 'noha', lvl: '3' },
    { id: '789012', name: 'ahmed', lvl: '2' },
    { id: '345678', name: 'mohamed', lvl: '4' }
  ];

  get filteredStudents() {
    return this.students.filter(student => student.name.toLowerCase().includes(this.studentName.toLowerCase()));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
