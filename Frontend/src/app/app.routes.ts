import { Routes } from '@angular/router';
import { Api } from './api/api';
import { Post } from './post/post';

export const routes: Routes = [
    {path:'api',component:Api},
    {path:'post',component:Post},
    {path:'',redirectTo:'/api',pathMatch:'full'}
];
