import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PlayersService {

  name = 'Roswell';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://api-mi-liga.now.sh/api/jugadores');
  }

}
