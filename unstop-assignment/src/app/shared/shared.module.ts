import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonFormateComponent } from '../generic-components/generic-button-formate/generic-button-formate.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GenericButtonFormateComponent], // Declare the component here
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [GenericButtonFormateComponent] // Export it so other modules can use it
})
export class SharedModule { }
