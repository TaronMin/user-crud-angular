import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }

  user: User = {
    firstName: "",
    lastName: ""
  }

  ngOnInit(): void {
  }

  onSubmit(user: User) {
    this.userService.post(user).subscribe(response => {
      this.router.navigate(["user"]);
      console.log(response);
    });
  }

}
