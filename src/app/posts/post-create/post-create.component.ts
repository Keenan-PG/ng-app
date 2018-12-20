import { Component, EventEmitter, Output } from '@angular/core';

// using post interface
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';

@Component({ // using component
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  // output decorator makes event accessible to outside component
  @Output() postCreated = new EventEmitter<Post>(); // creating new event to emit - of type Post

  onSubmitPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // creating post object from submitted post
    const post: Post = { // giving type Post to const obj
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post); // passing in created object as value to emit
  }

}
