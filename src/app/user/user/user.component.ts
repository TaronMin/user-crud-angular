import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  btnComponent: any = {
    createUser: "create-user",
    update: "update",
    deleteClass: "delete",
  };

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  searchUserInput: string = "";

  users: any = [];
  usersForFiltering: any = [];
  searchUrl: string = ""

  getUsers() {
    this.userService.get().subscribe(response => {
      this.users = response;
      this.usersForFiltering = response;
      this.activatedRoute.queryParams.subscribe(params => {
        this.searchUrl = Object.values(params)[0];
        if (this.searchUrl) {
          this.searchUserInput = this.searchUrl;
          this.filterUsers(this.searchUrl);
        }
      });
    });
  }

  ngOnInit(): void {
    this.getUsers();

  }

  onUpdate(user: any) {
    this.router.navigate([`user/${user.id}`]);
  }

  onDelete(user: any) {
    this.userService.delete(user).subscribe(() => {
      this.getUsers();
    })
  }

  filterUsers(user: string) {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {search: encodeURI(user)}
    })
    if (user) {
      this.users = Object.assign([], this.usersForFiltering);
      this.users = this.users.filter((u: any) => {
        let searchUser = `${u.firstName} ${u.lastName}`
        return searchUser.trim().toLowerCase().includes(user.toLowerCase())
      });
    } else {
      this.getUsers();
    }
  }
}
