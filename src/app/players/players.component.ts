import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/interfaces/player.interface';
import { PlayersService } from '../shared/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  isLoading = false;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.isLoading = true;
    this.playersService.get()
      .subscribe((players: Player[]) => {
        this.players = players;
        this.isLoading = false;
      })
  }

}
