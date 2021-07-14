import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hide-button',
  templateUrl: './hide-button.component.html',
  styleUrls: ['./hide-button.component.css']
})
export class HideButtonComponent {

  @Output() showForm = new EventEmitter<void>();

  constructor() { }
}
