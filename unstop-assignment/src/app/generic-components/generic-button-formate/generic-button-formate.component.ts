import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-button-formate',
  templateUrl: './generic-button-formate.component.html',
  styleUrls: ['./generic-button-formate.component.scss']
})
export class GenericButtonFormateComponent {

  @Output() btnEvent = new EventEmitter<any>();
  @Input() buttonText: string = "Add User";
  @Input() buttonIconName?: string;
  @Input() isPopupButton: boolean = false;
  @Input() popupState?: boolean;
  @Input() buttonColor:string = 'primary'
  @Input() isDisable:boolean = false;

  onButtonClick() {
    if (this.isPopupButton) {
      this.btnEvent.emit(!this.popupState);
    } else {
      this.btnEvent.emit();
    }
  }
}
