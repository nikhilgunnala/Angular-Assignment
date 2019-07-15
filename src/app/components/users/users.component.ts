import { Component, OnInit, ViewChild } from '@angular/core';
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
  
  //showUserForm:Boolean = true;


  //@ViewChild('userForm') form:any;

 /*  addUser(e){
    this.users.unshift(this.user);
    //This new user is used to clear out the form after adding new user.
    this.user = new User();
  } */

 /*  onUserFormSubmit({value, valid}: {value:User , valid:boolean}){
  if(!valid){
    
  } else{
    //Add it to the users - make a post call
    value.hide=true;
    this.users.unshift(value);
  }
  } */


