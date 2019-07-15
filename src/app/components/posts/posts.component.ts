import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  postTitle: string = '';
  postBody: string = '';
  post: Post;
  showPostsForm: Boolean = true;
  postAdded: Boolean = false;
  @ViewChild('postForm') form: any;


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }

  onPostFormSubmit({ value, valid }: { value: Post, valid: boolean }) {
    if (!valid) {
      alert('Please enter a proper post.');
    } else {
      this.addPost(value);
    }
  }

  addPost(post: Post) {
    this.postService.addPost(post).subscribe(
      post => {
        this.posts.unshift(post);
      })
    
    //Refreshing the form
    this.postTitle = '';
    this.postBody = '';
    this.showPostsForm=false;
    this.postAdded = true;
  }

  closeAlert(){
    this.postAdded = false;
  }
}

