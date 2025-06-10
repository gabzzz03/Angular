import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';
import { DUMMY_ACTORS } from '../data/dummy-actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actor : Actor | null = null 
  
  actors = DUMMY_ACTORS

  getCurrentActor(id: number): Actor | undefined {
    return this.actors.find((actor) => actor.id === id ) || undefined
  }
 
}
