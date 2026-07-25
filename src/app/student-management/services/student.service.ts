import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = environment.apiUrl + '/students';

  constructor(private http: HttpClient) { }
//go make a GET request to this.apiUrl, and when the response comes back, treat it as a Student[] men el interface.
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
  //returning observable ya3ny lazem a subscribe 3aleh for it to actually mean anything 

}
