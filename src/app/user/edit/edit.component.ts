import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public currentUser: User = new User("","");
  public userName: Array<string> = [];
  public id: number = 0;
  public user: User = new User("","");

  constructor(route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.id = parseInt(route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getById(this.id).subscribe(response => {
      this.currentUser = response;
      this.user = response;
      console.log(this.currentUser);
    })
  }


  onSubmit(newUser: User) {
    console.log(newUser," in edit component");
    this.currentUser = {
      id: this.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      action:newUser.action
    };
    this.userService.put(this.currentUser).subscribe(() => {
      this.router.navigate(['user']);
    });
  }
}
