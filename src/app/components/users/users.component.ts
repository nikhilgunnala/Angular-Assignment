import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users
    )
  }

  showHideUserDetails(user:User){
    user.hide = !user.hide;
  }

  showUserDetails(user:User){
    console.log("User id is " + user.id);
  }

}
  
