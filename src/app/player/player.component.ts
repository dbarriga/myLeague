
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './../shared/interfaces/player.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input('player')
  player: Player;

  // jugador: string = 'Sergio';

  @Input()
  team: string = 'No Team';

  @Output('onActivate')
  status: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  deactivate() {
    this.status.emit(false);
  }

}
