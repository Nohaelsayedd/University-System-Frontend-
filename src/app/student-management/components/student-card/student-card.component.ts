import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() id: number | undefined ;
  @Input() name: string | undefined ;
  @Input() lvl: string | undefined ;

  @Output() delete = new EventEmitter<number>();
//delete de el channel that the component can broadcast a NUMBER on 

  constructor() { }

  ngOnInit(): void {

  }
  onDeleteClick(): void{ //method that sends id 3al delete channel 
    if(this.id !== undefined){
      this.delete.emit(this.id);
    }
  }

}
