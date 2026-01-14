import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EntityService } from './entity';
import { Entity } from './entity.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api',
  imports: [CommonModule,FormsModule,RouterLink],
  standalone: true,
  templateUrl: './api.html',
  styleUrls : ['./api.css'],
})
export class Api implements OnInit {
  ngOnInit(): void {
    this.getEntity();
  }
  constructor(private apiService: EntityService){}
  newApi:Entity = {name:"",email:"",location:"",role:"",status:""}
  getApi:Entity[] = []
  editPost:Entity | null = null
  updatePost:Entity = {name:"",email:"",location:"",role:"",status:""}
  createEntity():void{
    this.apiService.create_post(this.newApi).subscribe((CreatedEntity)=>{
      this.newApi = {name:"",email:"",location:"",role:"",status:""};
      this.getApi.push(CreatedEntity);
    })
  }
  getEntity(){
    this.apiService.get_post().subscribe((entities)=>{
      this.getApi = entities
    })
  }
  edit_Post(e:Entity){
    this.editPost = e
    this.updatePost = {...e}
  }
  update_Post():void{
    if(this.editPost)
    {
      this.apiService.update_Post(this.editPost.uid!,this.updatePost).subscribe((updated)=>{
        const sid = this.getApi.findIndex((getApi)=>getApi.uid == this.editPost!.uid)
        if(sid!=-1)
        {
          this.getApi[sid] = updated
          this.closeEdit()
        }
      })
    }
  }
  closeEdit(){
    this.editPost = null
    this.updatePost = {name:"",email:"",location:"",role:"",status:""}
  }
  delete_Post(e:any)
  {
    if(confirm("Are you want to delete this one ? "))
    {
      this.apiService.delete_Post(e).subscribe(()=>{
        this.getApi = this.getApi.filter((getApi)=>getApi.uid!==e)
        if(this.editPost && this.editPost.uid == e)
        {
          this.closeEdit()
        }
      })
    }
  }
}
