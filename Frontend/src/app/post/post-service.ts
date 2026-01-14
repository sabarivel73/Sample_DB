import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostEntity } from './post-entity.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private api_1 = "http://localhost:8080/VWR/post";
  constructor(private httpClient:HttpClient){}
  create_post(newPost : PostEntity):Observable<PostEntity>{
    return this.httpClient.post<PostEntity>(this.api_1,newPost);
  }
  get_all_post():Observable<PostEntity[]>{
    return this.httpClient.get<PostEntity[]>(this.api_1);
  }
  update_post(id : number,newPost : PostEntity):Observable<PostEntity>{
    return this.httpClient.put<PostEntity>(this.api_1+'/'+id,newPost);
  }
  delete_post(id : number){
    return this.httpClient.delete(this.api_1+'/'+id);
  }
}
