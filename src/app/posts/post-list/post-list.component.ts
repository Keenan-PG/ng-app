import { Component, Input, OnInit } from '@angular/core'; // importing component feature - destructured

// using post interface
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({ // using component
  selector: 'app-post-list', // html selector
  templateUrl: './post-list.component.html', // html url
  styleUrls: ['./post-list.component.css'] // css ref
})

// using part of component lifecycle hook (auto implemented when angualr creates component)
// use by implementing interface
// OnInit hook (On Initialization -> do this).

export class PostListComponent  implements OnInit {
  // using @Input decorator to dictate that arr posts of type Posts will be created
  @Input() posts: Post[] = [];

  // constructor for postsService. with public
  // TS will create postsService property in scope and store incoming value in that
  constructor(public postsService: PostsService) {}

  // using OnInit
  ngOnInit() {
    this.posts = this.postsService.getPosts(); // getting all posts on initialization of component
  }
}
