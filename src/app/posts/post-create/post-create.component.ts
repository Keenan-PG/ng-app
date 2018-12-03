import { Component, EventEmitter, Output } from '@angular/core';

@Component({ // using component
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  // output decorator makes event accessible to outside component
  @Output() postCreated = new EventEmitter(); // creating new event to emit

  onSubmitPost() {
    // creating post object from submitted post
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post); // passing in created object as value to emit
  }

}
