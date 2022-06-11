import { Injectable } from '@angular/core';
import { Post } from 'src/app/services/interface/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private  posts: Post[] =[];

  getPosts(){

    return [...this.posts];
  }

  addPost(name: string, content: string){

    const post: Post ={name: name, content: content};
    this.posts.push(post);
  }
  constructor() { }
}
