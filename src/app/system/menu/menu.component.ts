import { Component, OnInit } from '@angular/core';
import { Menu} from './menu.class';
import { SystemService } from '../system.service';
import { User } from '../../user/user.class';

@Component
({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{
  loggedInUser: User;
  isAdmin: boolean;
  isReviewer: boolean;
  menu: Menu[] = 
  [
    new Menu('PRS', '/home', 'Purchase Request System'),
    new Menu('Users', '/user/list', "List of Users"),
    new Menu('Vendors', '/vendor/list', "List of Vendors"),
    new Menu('Products', '/product/list', "List of Products"),
    new Menu('Requests', '/request/list', "List of Requests"),
    new Menu('Reviews', '/request/review', "List of Requests under review"),
    new Menu("About", '/about', "About the Author"),
    new Menu("Login/Logout", "/login", "Login Page")
  ];

  constructor(private syssrv: SystemService) 
  {

  }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    this.loggedInUser = this.syssrv.get();
    this.isAdmin = this.loggedInUser.isAdmin;
    this.isReviewer = this.loggedInUser.isReviewer;
  }

}
