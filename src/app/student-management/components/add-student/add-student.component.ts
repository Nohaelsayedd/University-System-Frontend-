import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
   newStudent: Omit<Student, 'id'> = {
    firstName: '',
    lastName: '',
    email: '',
    lvl: '',
    facultyId: 0
  };

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddStudent(): void {
    this.studentService.create(this.newStudent).subscribe({
      next: () => {
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error('Failed to create student', err);
        alert('Could not add student — check the console for details.');
      }
    });
  }

}
