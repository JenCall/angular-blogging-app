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
    if(this.blogService.blogsData.length == 0) {
      this.blogService.fetchBlogs().then((res)=>{
        console.log(res);
        this.blogService.blogsData = res;
      }).catch((err)=>{
        console.log(err);
      });
    }
    this.blogIndex = this.router.snapshot.paramMap.get('blogindex');
  }

  blogIndex:any;

  username:string = "";
  comment:string = "";

  addComment(){
    let obj = {username:this.username, comment:this.comment};
    this.blogService.blogsData[this.blogIndex].comments.push(obj);
  }
}
