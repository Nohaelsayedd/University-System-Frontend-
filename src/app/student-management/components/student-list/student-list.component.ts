import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentName: string = '';
  students: Student[] = [];

  get filteredStudents() {
    return this.students.filter(student =>
      (student.firstName + ' ' + student.lastName).toLowerCase().includes(this.studentName.toLowerCase())
    );}

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe((students: Student[]) => {
      this.students = students;
    }); 
}
}
