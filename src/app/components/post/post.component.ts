import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  errorMessage:string='';
  showErrorMessage: Boolean = false;
  constructor(private route: ActivatedRoute,private postService: PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe(
      post => this.post = post,
      error => this.handleErrorResponse(error)
    )
  }

  handleErrorResponse(error){
    console.log('error', error);
    this.showErrorMessage = true;
    this.errorMessage = error.error.status + error.error.message;
  }

  closeAlert(){
    this.showErrorMessage = false;
  }


}
