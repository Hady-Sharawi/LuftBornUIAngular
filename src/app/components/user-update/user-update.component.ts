import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { user } from '../../models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {

 userForm!: FormGroup;
  MsgError: any;
  id!:number;
  user!:user;

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private route: Router,
     private fb: FormBuilder, private _userService: UserService)
      { }

      ngOnInit(): void {
        this.router.paramMap.subscribe(param => {
          this.id = +this.router.snapshot.params['id'];

          this._userService.getUserById(+this.router.snapshot.params['id']).subscribe(res => { this.user = res as user, 
            this.userForm = this.fb.group({
              id: [this.id, [Validators.required]],
              username: [this.user.userName, [Validators.required]],
              email: [this.user.email, [Validators.required]]
           });
          }, error => { console.log(error) });
             
           })
       }

      
      UpdateUser() {
        let con = new FormData();
        con.append("Id", this.userForm.value.id);
        con.append("UserName", this.userForm.value.username);
        con.append("Email", this.userForm.value.email);
               this.userForm.markAllAsTouched();
        this._userService.updateUser(con).subscribe(success => {
          this.route.navigate(['UserList']);
        }, error => {
                   this.MsgError = error.error;
              console.log(error);
              
                  });
     }

}
