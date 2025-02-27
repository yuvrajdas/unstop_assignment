import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { slideAnimationTrigger, slideDownAnimationTrigger } from 'src/app/animation/slidein.animation';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  animations: [slideAnimationTrigger, slideDownAnimationTrigger],
})
export class UserDashboardComponent {
  isOpen = false; // Control for slide animation
  router = inject(Router);
  dialog = inject(MatDialog);
  toggle() {
    this.isOpen = !this.isOpen;
  }


  addUser(){
    this.router.navigateByUrl('add-user')
  }

  async openUserFormDialog() {
    // Lazy load UserFormComponent from UserActionsModule
    const { UserFormComponent } = await import('../user-action/user-form/user-form.component');

    this.dialog.open(UserFormComponent,{
      panelClass:'add-user-form'
    });
  }
}
