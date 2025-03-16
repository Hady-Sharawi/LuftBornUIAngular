import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    standalone: false
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(pageNumber: number = 1, pageSize: number = 10): void {
    this._userService.getUsers(pageNumber, pageSize).subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id: number): void {
    this._userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  updateUser(id: number): void {
    this.router.navigate(['User/Update', id]);
  }
}
