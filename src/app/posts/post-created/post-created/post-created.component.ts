import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-created',
  templateUrl: './post-created.component.html',
  styleUrls: ['./post-created.component.css']
})
export class PostCreatedComponent implements OnInit {


  enteredName=''
  enteredValue = ''
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(){
 const post ={

  name : this.enteredName,
  content : this.enteredValue
 }
 this.postCreated.emit(post);
}
}
