import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogList: any = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogList = this.blogService.getAllPosts();
  }
}
