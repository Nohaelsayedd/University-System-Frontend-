import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() id: number | undefined ;
  @Input() name: string | undefined ;
  @Input() lvl: string | undefined ;


  constructor() { }

  ngOnInit(): void {

  }

}
