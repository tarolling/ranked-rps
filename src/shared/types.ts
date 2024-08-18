export type Move = 'rock' | 'paper' | 'scissors';

export interface Player {
    id: string;
    username: string;
    rating: number;
}

export interface GameResult {
    winner: Player;
    loser: Player;
}