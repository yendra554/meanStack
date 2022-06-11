import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/services/interface/post.model';
@Component({
  selector: 'app-post-created',
  templateUrl: './post-created.component.html',
  styleUrls: ['./post-created.component.css'],
})
export class PostCreatedComponent implements OnInit {

  @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      name: form.value.name,
      content: form.value.content,
    };
    this.postCreated.emit(post);
  }
}
