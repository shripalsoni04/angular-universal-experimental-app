import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html'
})

export class FirstComponent implements OnInit {
  title = 'Hello First Component';

  posts = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.posts = this.dataService.getPosts();

    this.dataService.getPosts().then((data: any[]) => {
      console.log('promise resolved ');
      this.posts = data;
    });
  }

  firstClicked() {
    console.log('yeahhh...First button click captured ');
  }
}
