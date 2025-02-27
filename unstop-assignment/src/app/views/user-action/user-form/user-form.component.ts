import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; // Allows alphabets and spaces

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userRoles: string[] = ['Admin', 'Editor', 'Viewer'];
  userForm: FormGroup;
  dialog = inject(MatDialog)
  fb = inject(FormBuilder);
  userService = inject(UserService);

  constructor() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(nameRegex)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  closeFormModal(event:any){
    if(event == true){
      this.dialog.closeAll();
    }
  }

  addNewUser(){
    let newUser = this.userForm.value
    this.userService.updateUserData(newUser);
    this.dialog.closeAll();
  }
}
