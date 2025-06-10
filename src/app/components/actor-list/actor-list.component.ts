import { Component, Input } from '@angular/core';
import { Actor } from '../../models/actor.model';
import { ActorCardComponent } from '../actor-card/actor-card.component';

@Component({
  selector: 'app-actor-list',
  standalone: true,
  imports: [ActorCardComponent],
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.scss'
})
export class ActorListComponent {
   @Input() name?: string
   @Input({required: true}) actors!: Actor[]
}
