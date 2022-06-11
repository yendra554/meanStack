import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/services/interface/post.model';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input()  posts: Post[] =[]


  constructor(postsService: PostsService) { }

  ngOnInit(): void {
  }

  // posts =[
  //   {name : 'abc' ,content: 'first content'},
  //   {name : 'def',contenet: 'Second content'}
  // ];


}
