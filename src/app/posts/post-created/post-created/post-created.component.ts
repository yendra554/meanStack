import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/services/interface/post.model';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-created',
  templateUrl: './post-created.component.html',
  styleUrls: ['./post-created.component.css'],
})
export class PostCreatedComponent implements OnInit {

  @Output() postCreated = new EventEmitter<Post>();

  constructor( public postsService: PostsService) {}

  ngOnInit() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.name, form.value.content)
  }
}
