import { Component } from '@angular/core'; // importing component feature - destructured

@Component({ // using component
  selector: 'app-post-create', // html selector
  templateUrl: './post-create.component.html' // html url
  // styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = 'No Content'; // "global (function)" var to store string

  onSubmitPost(postInput: HTMLTextAreaElement) {
    // console.dir(postInput); - checking obj props for postInput
    this.newPost = postInput.value; // using obj prop .value to print out user input
  }
}
