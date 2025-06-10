import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true}) title!: string;
  @Input() isSecondary: boolean = false;
  @Output() buttonClicked = new EventEmitter<void>();

  get btnStyle() {
    return this.isSecondary ? 'btn-secondary' : 'btn-primary';
  }

  onButtonClicked() {
    this.buttonClicked.emit();
  }
}