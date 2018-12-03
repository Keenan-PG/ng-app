import { Component, Input } from '@angular/core'; // importing component feature - destructured

// using post interface
import { Post } from '../posts.model';

@Component({ // using component
  selector: 'app-post-list', // html selector
  templateUrl: './post-list.component.html', // html url
  styleUrls: ['./post-list.component.css'] // css ref
})

export class PostListComponent {
  // posts = [
  //   {
  //     title: 'First post',
  //     content: 'First posts content!'
  //   },
  //   {
  //     title: 'Second post',
  //     content: 'Second posts content!'
  //   },
  //   {
  //     title: 'Third post',
  //     content: 'Third posts content!'
  //   }
  // ];

  @Input() posts: Post[] = [];
}
