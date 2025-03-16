import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrl: './user-create.component.css',
    standalone: false
})
export class UserCreateComponent {
  userForm!: FormGroup;
  MsgError: any;
  
  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private route: Router,
     private fb: FormBuilder, private _userService: UserService)
      { }

      ngOnInit(): void {
        this.userForm = this.fb.group({
          username: ['', [Validators.required]],
          email: ['', [Validators.required]]
       });
      }
      
      AddUser() {
        let con = new FormData();
        con.append("UserName", this.userForm.value.username);
        con.append("Email", this.userForm.value.email);
               this.userForm.markAllAsTouched();
        this._userService.createUser(con).subscribe(success => {
                    this.ngOnInit();
        }, error => {
                   this.MsgError = error.error;
              console.log(error);
              
                  });
     }

}
