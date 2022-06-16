import { Injectable } from '@angular/core';
import { Post } from 'src/app/services/interface/post.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private  posts: Post[] =[];
  private postUpdated = new Subject<Post[]>();  //payLoad
  getPosts(){

    return [...this.posts];
  }

  getPostUpdatedListener(){
    return this.postUpdated.asObservable();

  }

  addPost(name: string, content: string){

    const post: Post ={name: name, content: content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
  constructor() { }
}
