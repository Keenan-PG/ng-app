import { Component } from '@angular/core';

// using post interface
import { Post } from './posts/posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // making new array in storedPosts property of AppComponent.
  // Post[] = [] - Array of type post is new array
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
