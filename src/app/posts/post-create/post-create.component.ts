import { Component } from '@angular/core';

// using post interface
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({ // using component
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  // constructor for service
  constructor(public postsService: PostsService) {}

  enteredContent = '';
  enteredTitle = '';

  // method called on submit
  onSubmitPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // using addPost from service with params from NgForm to make obj and populate posts array
    this.postsService.addPost(form.value.title, form.value.content);
  }

}
