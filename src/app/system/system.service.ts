import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const url = "http://localhost:63201/api";



@Injectable
({
  providedIn: 'root'
})
export class SystemService 
{
  public loggedInUser: User | null = null;

  get(): User
  {
    return this.loggedInUser;
  }

  verifyLogin()
  {
    if(this.loggedInUser == null)
       return this.router.navigateByUrl("/login");
  }

  isAdmin(): boolean
  {
    if(this.loggedInUser == null)
    return false;
    else
    {
      return this.loggedInUser.isAdmin
    }
  }
  
  isReviewer(): boolean
  {
    if(this.loggedInUser == null)
    return false;
    else
    {
      return this.loggedInUser.isReviewer
    }
  }
  isLoggedIn(): boolean
  {
    if(this.loggedInUser === null)
    return false;
  }

  constructor(private http:HttpClient, private router: Router) { }
}
