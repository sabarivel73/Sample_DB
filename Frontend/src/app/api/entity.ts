import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableNotification } from 'rxjs';
import { Entity } from './entity.model';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  private api_1 = "http://localhost:8080/VWR";
  constructor(private httpClient: HttpClient){}
  create_post(newPost : Entity):Observable<Entity>{
    return this.httpClient.post<Entity>(this.api_1,newPost);
  }
  get_post():Observable<Entity[]>{
    return this.httpClient.get<Entity[]>(this.api_1);
  }
  update_Post(eid:number,epost:Entity):Observable<Entity>{
    return this.httpClient.put<Entity>(this.api_1+'/'+eid,epost);
  }
  delete_Post(eid:number){
    return this.httpClient.delete(this.api_1+'/'+eid);
  }
}
