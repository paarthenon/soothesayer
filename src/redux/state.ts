import {Person} from 'core/person';
import {View} from 'core/view';

export interface RootState {
    game?: GameState;
    view: View;
}

export interface GameState {
    silver: number;
    gold: number;
    activeReading?: Reading;
}

interface Reading {
    client: Person;
    subject: Person;
}

export const initState: RootState = {
    view: View.MainMenu(),
}