import { Component } from '@angular/core'; // importing component feature - destructured

@Component({ // using component
  selector: 'app-post-create', // html selector
  templateUrl: './post-create.component.html', // html url
  styleUrls: ['./post-create.component.css'] // css ref
})


export class PostCreateComponent {
  newPost = 'No Content'; // var to store string
  enteredValue = '';

  onSubmitPost() {
    // console.dir(postInput); - checking obj props for postInput
    this.newPost = this.enteredValue; // using obj prop .value to print out user input
  }

}
