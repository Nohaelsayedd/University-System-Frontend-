import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    { id: 1, firstName: 'Noha', lastName: 'Elsayed', email: 'noha.elsayed@example.com', lvl: '1', facultyName: 'Engineering' },
    { id: 2, firstName: 'Ahmed', lastName: 'Elsayed', email: 'ahmed.elsayed@example.com', lvl: '2', facultyName: 'Medicine' },
    { id: 3, firstName: 'Arwa', lastName: 'Elsayed', email: 'arwa.elsayed@example.com', lvl: '3', facultyName: 'Pharmacy' }
  ];

  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  get filteredStudents(): Student[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.students;
    }
    return this.students.filter(student =>
      `${student.firstName} ${student.lastName}`.toLowerCase().includes(term)
    );
  }

}
