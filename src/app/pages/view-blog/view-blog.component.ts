import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  constructor(public blogService:BlogService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.blogIndex = this.router.snapshot.paramMap.get('blogindex');
  }

  blogIndex:any;

}
