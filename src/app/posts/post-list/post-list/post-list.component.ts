import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // posts =[
  //   {name : 'abc' ,content: 'first content'},
  //   {name : 'def',contenet: 'Second content'}
  // ];
  posts =[]
}