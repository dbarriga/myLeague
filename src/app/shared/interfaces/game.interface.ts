export interface Game {
    id?: string;
    home: string;
    away: string;
    date: Date;
    homeRuns: number;
    awayRuns: number;
    mvp: string;
    place: string;
}