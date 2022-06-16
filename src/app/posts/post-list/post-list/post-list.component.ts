import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/app/services/interface/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit ,OnDestroy{

  posts: Post[] =[]

  private postsSub: Subscription
  constructor(public postsService: PostsService) { }

  ngOnInit(){

    this.posts = this.postsService.getPosts();
   this.postsSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
    this.posts =posts;
    });
  }

  // posts =[
  //   {name : 'abc' ,content: 'first content'},
  //   {name : 'def',contenet: 'Second content'}
  // ];

  ngOnDestroy(): void {
      this.postsSub.unsubscribe();
  }

}
