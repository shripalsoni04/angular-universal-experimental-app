import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  posts = [
    { title: 'Post 1', content: 'This is post 1' },
    { title: 'Post 2', content: 'This is post 2' },
    { title: 'Post 3', content: 'This is post 3' }
  ];

  constructor() { }

  getPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.posts);
      }, 2000);
    });
    // return this.posts;
  }
}
