import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  public postBlog(data:any){
    return new Promise<any>((resolve, reject)=>{
      this.http.post('http://localhost:3000/blogs', data).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }
}
