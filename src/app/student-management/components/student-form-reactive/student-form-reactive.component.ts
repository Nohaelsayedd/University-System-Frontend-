import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form-reactive',
  templateUrl: './student-form-reactive.component.html',
  styleUrls: ['./student-form-reactive.component.css']
})
export class StudentFormReactiveComponent implements OnInit {
  studentForm: FormGroup ;
  isEditMode = false;
  editingId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
     this.studentForm = this.fb.group({ 
      //fb.group bey3ml form group with formcontrol for each field 
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      lvl: ['', [Validators.required, Validators.pattern(/^[1-5]$/)]],
      facultyId: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params.id;
    if (idParam) {
      this.isEditMode = true;
      this.editingId = Number(idParam);
      this.studentService.getById(this.editingId).subscribe({
        next: (student) => this.studentForm.patchValue(student),
        error: (err) => console.error('Failed to load student', err)
      });
    }
  }

   onSubmit(): void {
    if (this.isEditMode) {
      this.studentService.update(this.editingId as number, this.studentForm.value).subscribe({
        next: () => this.router.navigate(['/students']),
        error: (err) => {
          console.error('Failed to update student', err);
          alert('Could not update student — check the console for details.');
        }
      });
    } else {
      this.studentService.create(this.studentForm.value).subscribe({
        next: () => this.router.navigate(['/students']),
        error: (err) => {
          console.error('Failed to create student', err);
          alert('Could not add student — check the console for details.');
        }
      });
    }
  }
}


