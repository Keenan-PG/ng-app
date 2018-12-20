// creating angular service. Using local refs and angular directives are good for smaller scale apps but for scalability and centralization,
// longer chains of property and event binding will be an issue.

// services are a class which become injectable as dependency for different components
// to use. making data accessible over those components without using bindings everywhere etc.

import { Post } from './posts.model';
import { Injectable } from '@angular/core';

// injectable makes it so angular only creates one instance of service
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = []; // store list of posts (of type Post array)

  getPosts() {
    // do NOT want to use original array (arrays and objects a reference types in JS)
    return [...this.posts]; // creating new array using spread operator (...) to split apart posts array.
  }

  // add post method which accepts types of string (title, content)
  addPost(title: string, content: string) {

    // creating post object
    const post: Post = {
      title: title,
      content: content
    };

    // adding object to posts array
    this.posts.push(post);
  }

}
