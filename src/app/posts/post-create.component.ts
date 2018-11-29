import { Component } from '@angular/core'; // importing component feature - destructured

@Component({ // using component
  selector: 'app-post-create', // html selector
  templateUrl: './post-create.component.html' // html url
  // styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = 'yo'; // "global (function)" var to store string

  onSubmitPost() {
    this.newPost = 'The user\'s post'; // manipulating string for output
  }
}
