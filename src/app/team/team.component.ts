import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/interfaces/player.interface';
import { Team } from '../shared/interfaces/team.interface';
import { PlayersService } from '../shared/services/players.service';
import { TeamsService } from '../shared/services/teams.service';

import * as PLAYERS from '../../assets/data/players.json'
import * as TEAMS from '../../assets/data/teams.json';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  name: string = 'Cubs';
  status: boolean = false;
  // jugador: string = 'Carlos';

  players: Player[] = [];
  teams: Team[];

  player: Player = {
    nombre: 'Sergio',
    edad: 35,
    apodo: 'Felino',
    foto: 'imagen.jpg',
    posicion: 'Delantero',
    estado: false
  }

  step = 0;

  activeColor = 'blue';
  inactiveColor = 'red';

  budget = 18000000;
  update = new Date();
  fans = 1500320.2345;
  era = 0.8732;
  search = '';

  isLoading = false;

  constructor(private playersService: PlayersService,
    private teamsService: TeamsService) { }

  ngOnInit() {
    this.name = 'Piratas';

    // this.jugadores = JUGADORES as any;
    this.teams = TEAMS as any;

    this.getPlayers();

  }

  getPlayers() {
    this.isLoading = true;

    // this.jugadoresService.nombre;

    this.playersService.get()
      .subscribe((players: Player[]) => {

        this.players = players;
        this.isLoading = false;
      })
  }

  addPlayer() {
    let player = 'Serge';
    player = 'Iván';

    this.player.nombre = player;
  }

  updateStatus(player: Player, i: number, event) {
    player.estado = event;
    this.step = i;
    //this.jugador.estado = event;
    // this.estatus = event;
  }

  activatePlayer(player: Player) {
    player.estado = true;
  }

  showData(i: number) {
    this.step = i;
  }

  getColor(status: boolean) {
    return status ? 'blue' : 'red';
  }

}
