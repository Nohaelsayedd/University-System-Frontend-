import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
   newStudent: Omit<Student, 'id'> = {
    firstName: '',
    lastName: '',
    email: '',
    lvl: '',
    facultyId: 0
  };
  isEditMode = false;
  editingId: number | undefined;

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params.id;
    if (idParam) {
      this.isEditMode = true;
      this.editingId = Number(idParam);
      this.studentService.getById(this.editingId).subscribe({
        next: (student) => {
          this.newStudent = student;
        },
        error: (err) => console.error('Failed to load student', err)
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) { //as 3shan typescript is against undefined 
      this.studentService.update(this.editingId as number, this.newStudent).subscribe({
        next: () => {
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.error('Failed to update student', err);
          alert('Could not update student — check the console for details.');
        }
      });
    } 

    else {
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


}
