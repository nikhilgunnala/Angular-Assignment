import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpHeaders = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})


export class PostService {

  postsUrl: string = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpHeaders);
  }

  getPost(id: number): Observable<Post> {
    let url: string = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }
}
