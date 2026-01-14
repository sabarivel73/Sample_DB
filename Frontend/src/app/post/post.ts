import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PostService } from './post-service';
import { PostEntity } from './post-entity.model';

@Component({
  selector: 'app-post',
  imports: [CommonModule,FormsModule,RouterLink],
  standalone: true,
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {
  ngOnInit(): void {
    this.get_all_Post();
  }
  constructor(private postService : PostService){}
  newPost:PostEntity = {uid: 0,content:"",status:"",date: new Date(0)}
  getPost:PostEntity[] = []
  editPost:PostEntity | null = null
  updatePost:PostEntity = {uid: 0,content:"",status:"",date: new Date(0)}
  createPost():void{
    this.postService.create_post(this.newPost).subscribe((createdPost)=>{
      this.newPost = {uid: 0,content:"",status:"",date: new Date(0)}
      this.getPost.push(createdPost)
    })
  }
  get_all_Post(){
    this.postService.get_all_post().subscribe((posts)=>{
      this.getPost = posts
    })
  }
  edit_Post(e:PostEntity){
      this.editPost = e
      this.updatePost = {...e}
    }
    update_Post():void{
      if(this.editPost)
      {
        this.postService.update_post(this.editPost.uid!,this.updatePost).subscribe((updated)=>{
          const sid = this.getPost.findIndex((getPost)=>getPost.uid == this.editPost!.uid)
          if(sid!=-1)
          {
            this.getPost[sid] = updated
            this.closeEdit()
          }
        })
      }
    }
    closeEdit(){
      this.editPost = null
      this.updatePost = {uid: 0,content:"",status:"",date: new Date(0)}
    }
    delete_Post(e:any)
    {
      if(confirm("Are you want to delete this one ? "))
      {
        this.postService.delete_post(e).subscribe(()=>{
          this.getPost = this.getPost.filter((getPost)=>getPost.uid!==e)
          if(this.editPost && this.editPost.uid == e)
          {
            this.closeEdit()
          }
        })
      }
    }
}
